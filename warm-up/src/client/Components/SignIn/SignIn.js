import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../../Commons/Modal/Modal";

import SignInContent from "./SignInContent";
import SignUpContent from "./SignUpContent";
import UpdatePassword from "./UpdatePassword";

const SignIn = ({ handleLogin }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [titleText, setTitleText] = useState("Sign in to your account");

  const [content, setContent] = useState("sign-in"); // three state: sign-in, sign-up, update-password
  return (
    <div>
      <p className="sign-in-button" onClick={handleOpen}>
        Sign in
      </p>
      <Modal
        visible={open}
        setVisible={setOpen}
        titleText={titleText}
        width={550}
      >
        {(() => {
          if (content == "sign-in") {
            return (
              <SignInContent
                setContent={setContent}
                setTitleText={setTitleText}
                handleLogin={handleLogin}
              />
            );
          } else if (content === "sign-up") {
            return (
              <SignUpContent
                setContent={setContent}
                setTitleText={setTitleText}
              />
            );
          } else {
            return (
              <UpdatePassword
                setContent={setContent}
                setTitleText={setTitleText}
              />
            );
          }
        })()}
      </Modal>
    </div>
  );
};

export default SignIn;
