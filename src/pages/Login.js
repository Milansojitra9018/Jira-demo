import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Store/actions/action";

function Login() {
  const { search } = useLocation();
  const userType = new URLSearchParams(search).get("type");
  const [user, setUser] = useState({ email: "", password: "", type: userType });
  const Navigate = useNavigate();
  const token = btoa(JSON.stringify(user));
  const handlelogin = (e) => {
    e.preventDefault();
    const storedemail = localStorage.getItem("email");
    const storedpassword = localStorage.getItem("password");
    if (!user.email && !user.password) {
      alert("fill in the blanks");
    } else if (user.email === storedemail && user.password === storedpassword) {
      localStorage.setItem("Token", token);
      Navigate("/dashboard");
    } else {
      alert("please enter valid username and password");
    }
    login(user);
  };

  return (
    <div style={{ paddingTop: 150 }}>
      <form className="inputfield">
        <TextField
          label="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <TextField
          label="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <Button
          variant="contained"
          style={{ width: 80, marginLeft: "65%" }}
          onClick={handlelogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { login })(Login);
