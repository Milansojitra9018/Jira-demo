import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { signup } from "../Store/actions/action";

function SignUp() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    type: "",
  };

  const Navigate = useNavigate();
  const [userData, setUserData] = useState(initialState);
  const options = [
    { value: "Owner", label: "Owner" },
    { value: "TeamMember", label: "Team Member" },
  ];

  const handlesignup = (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);
      localStorage.setItem("userType", userData.type);
      const type = localStorage.getItem("userType");
      signup(userData);
      Navigate("/login");
    } else {
      alert("Fill in the blanks");
    }
  };

  return (
    <div style={{ paddingTop: 80 }}>
      <form className="inputfield">
        <Select
          options={options}
          className="options"
          onChange={(selectedOption) => {
            setUserData({ ...userData, type: selectedOption.value });
          }}
        />
        <br />
        <TextField
          label="username"
          type="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <br />
        <TextField
          label="email"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <br />
        <TextField
          label="password"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <br />
        <Button
          variant="contained"
          style={{ width: 80, marginLeft: "65%" }}
          onClick={handlesignup}
        >
          Signup
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

export default connect(mapStateToProps, { signup })(SignUp);
