import SearchField from "./SearchField";
import SignInButton from "./SignInButton";

const Header = () => {
  return (
    <div className="px-5 header-container ">
      <div className="d-flex justify-content-between py-1">
        <div className="d-flex">
          <h2 className="mx-2">Management</h2>
          <span className="align-self-end ">Chuwa</span>
        </div>
        <SearchField />

        <div className="d-flex ">
          <SignInButton />

          <p className="align-self-end mx-3">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
