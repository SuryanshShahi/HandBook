import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import googleLogo from "../Images/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const history = useHistory();
  // let name, value;
  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };
  const [text, setText] = useState(``);
  const [password, setPassword] = useState(``);

  const PostData = async (e) => {
    e.preventDefault();
    console.log(text);
    console.log(password);
    const res = await fetch("/login", {
      method: "POST",
      PORT: "5000",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 201) {
      toast.warning("Logged In !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      history.push("/");
      console.log("Login Successful");
    } else {
      toast.error("Invalid Credentials !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("Invalid Credentials");
    }
  };

  // const PostData = async (e) => {
  //   e.preventDefault();
  //   console.log(text);
  //   console.log(password);
  //   fetch("/login", {
  //     method: "POST",
  //     PORT: "5000",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       text,
  //       password,
  //     }),
  //   })
  //     .then(() => console.log("res"))
  //     .catch((err) => console.log(err));

  //  axios
  //   .post("/login", {
  //     text,
  //     password,
  //   })
  //   .then((res)=> {
  //     console.log(res);
  //   })
  //   .catch((error)=> {
  //     console.log(error);
  //   });

  // const data = res.json();
  // if (res.status === 201) {
  //   console.log("Login Successful");
  // } else {
  //   console.log("Invalid Credentials");
  // }

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
              <div
                className="d-flex align-items-center justify-content-center p-2 mt-2"
                style={{
                  border: "solid 1px #d0d0d0",
                  borderRadius: "7px",
                  cursor: "pointer",
                  height: "45px",
                }}
              >
                <img
                  src="https://www.evernote.com/redesign/OpenID/img/apple-logo_20.svg"
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
              <input
                name="text"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control shadow-none"
                placeholder="Enter email address or username"
                style={{
                  height: "45px",
                  boxShadow: "1px solid #e6e6e6",
                  borderRadius: "7px",
                }}
              />
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control shadow-none mt-2"
                placeholder="Password"
                style={{
                  height: "45px",
                  boxShadow: "1px solid #e6e6e6",
                  borderRadius: "7px",
                }}
              />
              <div
                className="btn btn-success w-100 align-items-center justify-content-center d-flex mt-3"
                style={{ height: "45px", background: "rgb(0, 168, 45)" }}
                onClick={PostData}
              >
                Continue
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
              <div style={{ color: "#737373" }}>Don't have an account?</div>
              <NavLink to="/signup" className="text-decoration-none">
                <div
                  className="mt-2"
                  style={{
                    color: "#00a82d",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Create account
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
