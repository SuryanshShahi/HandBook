const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

require("./db/conn");
const User = require("./model/userSchema");

// var nodemailer = require("nodemailer");

router.post("/signup1", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "All fields are mandatory" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ error: "Email already exists" });
    } else {
      const user = new User({
        email,
        password,
      });

      await user.save();
      res.status(201).json({ message: "user registered successfully" });

      // var transporter = nodemailer.createTransport({
      //   service: "gmail",
      //   auth: {
      //     user: process.env.EMAIL,
      //     pass: process.env.PASS,
      //   },
      // });

      // var mailOptions = {
      //   from: process.env.EMAIL,
      //   to: email,
      //   subject: "Registraion Successfull",
      //   text: `Welcome To CARS4U`,
      //   attachments: [
      //     {
      //       filename: "cars4u.html",
      //       path: "https://drive.google.com/uc?export=view&id=1Om7jFYz0x36OebV_DggkJgmhKkwdYP-N",
      //     },
      //   ],
      // };

      // transporter.sendMail(mailOptions, function (error, info) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log("Email sent: " + info.response);
      //   }
      // });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are mandatory" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        res.status(201).json({ message: "login successful" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
