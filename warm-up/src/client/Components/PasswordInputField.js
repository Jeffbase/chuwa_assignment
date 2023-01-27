import { useState } from "react";
const PasswordInputField = ({ setPassword }) => {
  const [passwordType, setPasswordType] = useState("password");
  const showPassword = () => {
    setPasswordType((prev) => {
      if (prev === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };
  return (
    <div className="d-flex password">
      <input
        type={passwordType}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-grow-1"
      ></input>
      <p onClick={showPassword}>show</p>
    </div>
  );
};

export default PasswordInputField;
