import { useState } from "react";
import Button from "react-bootstrap/Button";
import PopupWindow from "./PopupWindow";

const SignInButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Sign in
      </Button>
      <PopupWindow open={open} setOpen={setOpen}></PopupWindow>
    </div>
  );
};

export default SignInButton;
