import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Media,
  Row,
} from "reactstrap";
import { Btn, H4, Image, P } from "../AbstractElements";
import {
  EmailAddress,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
} from "../Constant";

import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";

import CustomizerContext from "../_helper/Customizer";
import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";
import { Login } from "../api";

const Signin = ({ selected }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  // const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  // const [name, setName] = useState(localStorage.getItem("Name"));

  // useEffect(() => {
  //   localStorage.setItem("profileURL", man);
  //   localStorage.setItem("Name", "Emay Walter");
  // }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please Enter password or username!..");
    } else {
      const response = await fetch(`${Login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.status === "success") {
        sessionStorage.setItem("login", JSON.stringify(true));
        sessionStorage.setItem("user_id", data.data[0].empid);
        sessionStorage.setItem("user_name", data.data[0].user_name);
        history(`/dashboard`);
        toast.success("Successfully logged in!..");
      } else {
        toast.error("You enter wrong password or username!..");
      }
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <Image
                    attrImage={{
                      className: "img-fluid for-light",
                      src: `${require("../assets/images/logo/clumpssoftware.png")}`,
                      alt: "",
                    }}
                  />
                  <P>{"Enter your email & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input
                        className="form-control"
                        type={togglePassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <div
                        className="show-hide"
                        onClick={() => setTogglePassword(!togglePassword)}
                      >
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className="position-relative form-group mb-0">
                    <div className="checkbox">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <a className="link" href="#javascript">
                      {ForgotPassword}
                    </a>
                    <Btn
                      attrBtn={{
                        color: "primary",
                        className: "d-block w-100 mt-2",
                        onClick: (e) => loginAuth(e),
                      }}
                    >
                      {SignIn}
                    </Btn>
                  </div>
                  {/* <OtherWay /> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
