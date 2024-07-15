import React from "react";
import img_google from "../assets/img/googlee.png";

function Signup() {
  function register(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const data = [];
    if (email === "" && password === "" && confirmPassword === "") {
      window.alert("data tidak boleh kosong");
    }
    if (password !== confirmPassword) {
      data.push({
        email: email,
        password: password,
      });
    }
  }
  return (
    <div className="container-auth">
      <div className="header">
        <h1>Register</h1>
      </div>
      <form onSubmit={register}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Konfirmasi password"
          />
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-google">
          <img src={img_google}></img> Sign up with Google
        </div>
      </form>
    </div>
  );
}

export default Signup;
