import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Form, Input, Space } from "antd";
import { Container, Main_div, Save_button } from "../../component/style";
import { PNG } from "../../../assets";
export const Login = () => {
  return (
    <div className="App">
      <Container>
        <Main_div>
          <img src={PNG.POPIN_LOGO} className="logo" />
          <p className="welcome">Hi there, Welcome!</p>
          <p className="text">Enter the information below to login.</p>
          <br></br>
          <br></br>
          <Form
            //   sx={{
            //     "& > :not(style)": { width: "100%" },
            //   }}

            noValidate
            autoComplete="off"
          >
            <Input
              id="standard-basic"
              //   label="Username" variant="standard"
            />
            <br></br>
            <br></br>
            <Input
              id="standard-password-input"
              // label="Password"
              type="password"
              autoComplete="current-password"
              // variant="standard"
            />
            <br></br>
            <br></br>
            <a href="#" className="Forgot_link">
              Forgot Password?
            </a>

            <Link to={"/Policy"} style={{ textDecoration: "none" }}>
              <Save_button style={{ marginTop: "45px" }}>Login</Save_button>
            </Link>
            <p className="powerd">
              Powered by :{" "}
              <span>
                <img src={PNG.REWARD} />
              </span>
            </p>
          </Form>
        </Main_div>
      </Container>
    </div>
  );
};
