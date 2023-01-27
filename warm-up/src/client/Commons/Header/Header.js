import { Layout, Menu, Typography, Space } from "antd";
import "./index.css";
import SignIn from "../../Components/SignIn/SignIn";

const Header = () => {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header>
      <div className="Header">
        <div className="Header-part1">
          <div className="logo">
            <Space align="baseline">
              baseline
              <h1 className="logo-management">Management</h1>
              <p className="logo-chuwa">chuwa</p>
            </Space>
          </div>

          <input type="text" className="search-box"></input>
        </div>

        <SignIn />
      </div>
    </Header>
  );
};

export default Header;
