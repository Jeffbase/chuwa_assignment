import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../../Commons/Modal/Modal";
import SignInContent from "./SignInContent";

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const titleText = "Sign in to your account";
  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Sign in
      </Button>
      <Modal
        visible={open}
        setVisible={setOpen}
        titleText={titleText}
        width={550}
      >
        <SignInContent />
      </Modal>
    </div>
  );
};

export default SignIn;
