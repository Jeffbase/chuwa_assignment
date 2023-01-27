import "./index.css";
import { Row, Col, Input, Button } from "antd";

const SignInContent = () => {
  return (
    <div className="modal-content">
      <div className="email-group">
        <p>Email</p>
        <Row>
          <Col span={24}>
            <Input size="large" />
          </Col>
        </Row>
      </div>

      <div className="password-group">
        <p>Password</p>
        <Row>
          <Col span={24}>
            <Input size="large" />
          </Col>
        </Row>
      </div>

      <Row>
        <Col span={24}>
          <Button className="sign-in-button" type="primary" size="large" block>
            Sign In
          </Button>
        </Col>
      </Row>
      <div className="modal-footer">
        <p>
          Don't have an account?<a href="#">Sign up</a>
        </p>
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
};

export default SignInContent;
