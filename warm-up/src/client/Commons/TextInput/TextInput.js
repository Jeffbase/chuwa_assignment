import { Row, Col, Input, Paragraph } from "antd";
import "./index.css";

const TextInput = ({ isPassword, span, size, onChange, isError, errorMsg }) => {
  return (
    <Row>
      <Col span={span}>
        {isPassword ? (
          <Input.Password size={size} onChange={onChange} />
        ) : (
          <Input size={size} onChange={onChange} />
        )}

        {isError ? <span className="error-message">{errorMsg}</span> : <div />}
      </Col>
    </Row>
  );
};

export default TextInput;
