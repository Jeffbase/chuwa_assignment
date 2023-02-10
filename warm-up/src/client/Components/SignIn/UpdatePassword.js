import { useState } from "react";
import "./index.css";
import { Row, Col, Input, Button, Form } from "antd";
import api from "../../api/api";

const UpdatePassword = ({ setContent, setTitleText }) => {
  const [email, setEmail] = useState({
    value: "",
    errorMessage: "",
  });

  const handleSubmit = async () => {
    const response = await api.getCustomerApi();

    const text = await response.json();
    console.log(text);
  };
  return (
    <div className="modal-content">
      <p>Enter your email link, we will send you the recovery link</p>
      <div className="email-group">
        <p>Email</p>
        <Row>
          <Col span={24}>
            <Input
              size="large"
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
            />
          </Col>
        </Row>
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
            Update Password
          </Button>
        </Col>
      </Row>
      <div className="modal-foot">
        <p>
          <a
            href="#"
            onClick={() => {
              setContent("sign-in");
              setTitleText("Sign in to your account");
            }}
          >
            back
          </a>
        </p>
      </div>
    </div>
  );
};

export default UpdatePassword;
