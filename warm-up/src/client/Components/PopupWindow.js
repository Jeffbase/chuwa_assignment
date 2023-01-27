import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EmailInputField from "./EmailInputField";
import PasswordInputField from "./PasswordInputField";
import { useState } from "react";

const PopupWindow = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  return (
    <Modal show={open} onHide={handleClose} className="modal">
      <Modal.Header closeButton>
        <Modal.Title>Sign in to your account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="px-3">
          <div className="d-grid">
            <p>Email</p>
            <EmailInputField
              setEmail={setEmail}
              setIsEmailValid={setIsEmailValid}
            />
          </div>
          <div className="d-grid pt-3">
            <p>Password</p>
            <PasswordInputField setPassword={setPassword} />
          </div>
          <div className="d-grid gap-2 pt-4">
            <Button
              variant="primary"
              onClick={(e) => {
                alert(
                  `email is ${email}, valid: ${isEmailValid}\n password is ${password}, valid: ${isPasswordValid}`
                );
              }}
            >
              Sign in
            </Button>
          </div>
          <div className="d-flex justify-content-between pt-3">
            <p className="register">
              Don't have an account?
              <span>
                <a href="">Sign up</a>
              </span>
            </p>
            <p className="register">
              <span>
                <a href="">Forgot password?</a>
              </span>
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopupWindow;
