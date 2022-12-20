import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import googleLogo from "../Images/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    console.log(email);
    console.log(password);
    const res = await fetch("/signup1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      toast.warning("All fields are mandatory !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("All fields are mandatory");
    } else if (res.status === 409) {
      toast.warning("Email already exists!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("Email already exists");
    } else if (res.status === 401) {
      toast.warning("Password Didn't Match !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("Password Didn't Match");
    } else if (res.status === 201) {
      toast.success("SignUp Successful !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("SignUp Successful");
    } else {
      toast.error("Invalid Credentials !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("Invalid Credentials");
    }
  };
  return (
    <section>
      <ToastContainer />
      <div
        id="loginSignup"
        className="justify-content-center d-flex align-items-center"
      >
        <div
          className="rounded bg-white p-3"
          style={{
            width: "100%",
            maxWidth: "512px",
            boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
          }}
        >
          <div className="text-center justify-content-center d-flex py-4">
            <div className="" style={{ width: "314px" }}>
              <span
                className="fa fa-book fa-4x text-center"
                style={{ color: "#00a82d" }}
              ></span>
              <div className="" style={{ fontWeight: "700", fontSize: "48px" }}>
                <span style={{ color: "#00a82d" }}>Hand</span>Book
              </div>
              <div
                className="my-2"
                style={{ color: "#333333", fontSize: "16px" }}
              >
                Remember everything important.
              </div>
              <div
                className="d-flex align-items-center justify-content-center mt-5 p-2"
                style={{
                  border: "solid 1px #d0d0d0",
                  borderRadius: "7px",
                  cursor: "pointer",
                  height: "45px",
                }}
              >
                <img
                  src={googleLogo}
                  alt=""
                  style={{ height: "18px", width: "18px" }}
                />
                <div className="ml-2" style={{ color: "#6a6a6a" }}>
                  Continue with Google
                </div>
              </div>
              <div className="d-flex align-items-center my-3">
                <hr style={{ color: "#ababab", width: "45%" }}></hr>
                <div
                  className="mx-3"
                  style={{ color: "#ababab", fontSize: "14px" }}
                >
                  Or
                </div>
                <hr style={{ color: "#ababab", width: "45%" }}></hr>
              </div>
              <form method="POST" onSubmit={PostData}>
                <input
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Email"
                  style={{
                    height: "45px",
                    boxShadow: "1px solid #e6e6e6",
                    borderRadius: "7px",
                  }}
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                />
                <input
                  type="password"
                  className="form-control shadow-none mt-2"
                  placeholder="Password"
                  style={{
                    height: "45px",
                    boxShadow: "1px solid #e6e6e6",
                    borderRadius: "7px",
                  }}
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
                <button
                  type="submit"
                  className="btn btn-success w-100 align-items-center border-0 justify-content-center d-flex mt-3"
                  style={{ height: "45px", background: "rgb(0, 168, 45)" }}
                >
                  Continue
                </button>
              </form>
              <div
                className="mt-3"
                style={{ fontSize: "12px", color: "#a6a6a6" }}
              >
                By creating an account, you are agreeing to our{" "}
                <span style={{ color: "#00a82d", cursor: "pointer" }}>
                  Terms of Service
                </span>{" "}
                and{" "}
                <span style={{ color: "#00a82d", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </div>
              <div
                className="d-flex justify-content-center mt-5"
                style={{ marginBottom: "25px" }}
              >
                <input
                  type="checkbox"
                  className="form-check mr-2"
                  style={{ width: "16px", cursor: "pointer" }}
                />
                <div style={{ color: "#737373" }}>Remember me for 30 days</div>
              </div>
              <div style={{ color: "#737373" }}>Already have an account?</div>
              <NavLink to="/login" className="text-decoration-none">
                <div
                  className="mt-2"
                  style={{
                    color: "#00a82d",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Sign in
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
