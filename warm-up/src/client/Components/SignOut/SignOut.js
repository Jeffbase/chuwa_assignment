import { Button } from "antd";

const SignOut = ({ handleSignout }) => {
  return (
    <div>
      <Button variant="primary" onClick={handleSignout}>
        Sign out
      </Button>
    </div>
  );
};

export default SignOut;
