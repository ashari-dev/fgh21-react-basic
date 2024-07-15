import React from "react";
import img_google from "../assets/img/googlee.png";

function Signin() {
  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

      if (email === 'admin@mail.com' && password === '1234') {
        window.alert(`berhasil masuk menggunakan email : ${email}`);
      } else {
        window.alert("email atau password salah!!");
      }

  }
  return (
    <div className="container-auth">
      <div className="header">
        <h1>Welcome Back</h1>
        <h4>Welcome Back! Please enter your details.</h4>
      </div>
      <form onSubmit={login}>
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
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <div className="forget-password">
          <div>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remeber for 30 day</label>
          </div>
          <a>Forget Password</a>
        </div>
        <button type="submit">Sign In</button>
        <div className="login-google">
          <img src={img_google}></img> Sign in with Google
        </div>
      </form>
    </div>
  );
}

export default Signin;
