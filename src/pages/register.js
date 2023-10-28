import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const Navigate = useNavigate();
  return (
    <>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "12%",
          color: "darkblue",
        }}
      >
        Register
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="contained"
            style={{ marginBottom: 10 }}
            onClick={() => Navigate("/signup")}
          >
            Signup
          </Button>
          <Button variant="contained" onClick={() => Navigate("/login")}>Login</Button>
          <p style={{fontSize: 15}}>Already have an account?  &nbsp; 
            <Link to='/login'>
             login
          </Link></p>
        </div>
      </div>
    </>
  );
}
