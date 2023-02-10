import { useState } from "react";
import "./index.css";
import { Row, Col, Input, Button, Form } from "antd";
import { useSignIn } from "react-auth-kit";
import api from "../../api/api";

import validator from "validator";

// import { StatusCodes } from "http-status-codes";

import TextInput from "../../Commons/TextInput/TextInput";

const SignInContent = ({ setContent, setTitleText, handleLogin }) => {
  const [email, setEmail] = useState({
    value: "",
    errorMessage: "",
  });

  const [password, setPassword] = useState({
    value: "",
    errorMessage: "",
  });
  const signIn = useSignIn();

  const emailValidation = () => {
    let errorMessage = "";
    if (!validator.isEmail(email.value)) {
      errorMessage = "Please enter a valid email";
    }
    setEmail({
      ...email,
      errorMessage,
    });

    return errorMessage;
  };

  const passwordValidation = () => {
    let errorMessage = "";
    if (password.value === "") {
      errorMessage = "Please enter a valid password";
    }
    setPassword({
      ...password,
      errorMessage,
    });

    return errorMessage;
  };
  const handleSubmit = async () => {
    const emailError = emailValidation();
    const passwordError = passwordValidation();
    if (!(emailError || passwordError)) {
      const response = await api.loginApi({
        username: email.value,
        password: password.value,
      });
      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        alert(`Login API response status error: ${data.message}`);
      } else {
        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: email.value },
        });
        handleLogin();
      }
    }

    // console.log(response.json());
  };
  return (
    <div className="modal-content">
      <div className="email-group">
        <p>Email</p>

        <TextInput
          span={24}
          size={"large"}
          onChange={(e) => setEmail({ ...email, value: e.target.value })}
          isError={email.errorMessage ? true : false}
          errorMsg={email.errorMessage}
          isPassword={false}
        />
      </div>

      <div className="password-group">
        <p>Password</p>
        <TextInput
          span={24}
          size={"large"}
          onChange={(e) => setPassword({ ...password, value: e.target.value })}
          isError={password.errorMessage ? true : false}
          errorMsg={password.errorMessage}
          isPassword={true}
        />
      </div>

      <Row>
        <Col span={24}>
          <Button
            className="sign-in-button"
            type="primary"
            size="large"
            block
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Col>
      </Row>
      <div className="modal-foot">
        <p>
          Don't have an account?
          <a
            href="#"
            onClick={() => {
              setContent("sign-up");
              setTitleText("Sign up an account");
            }}
          >
            Sign up
          </a>
        </p>
        <p>
          <a
            href="#"
            onClick={() => {
              setContent("update-password");
              setTitleText("Update your password");
            }}
          >
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInContent;
