import { Layout, Menu, Typography, Space, Row, Col } from "antd";
import "./index.css";

import { useSignOut } from "react-auth-kit";
import { useState } from "react";

import SignIn from "../../Components/SignIn/SignIn";
import SignOut from "../../Components/SignOut/SignOut";

import Cookies from "js-cookie";

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Header = ({ isSignin, setIsSignin }) => {
  const { Header } = Layout;
  const { Title } = Typography;
  const signOut = useSignOut();

  return (
    <div>
      <Header className="header-tablet">
        <div className="Header">
          <div className="Header-part1">
            <div className="logo">
              <Space align="baseline">
                <h1 className="logo-management">Management</h1>
                <p className="logo-chuwa">chuwa</p>
              </Space>
            </div>

            <input type="text" className="search-box"></input>
          </div>

          <div className="user-block">
            <Space>
              <UserOutlined style={{ color: "#fcfcfc", fontSize: "20px" }} />
              {isSignin ? (
                <SignOut
                  handleSignout={() => {
                    signOut();
                    if (!Cookies.get("_auth")) {
                      setIsSignin(false);
                    }
                  }}
                />
              ) : (
                <SignIn handleLogin={() => setIsSignin(true)} />
              )}
            </Space>
          </div>
          <div className="cart-block">
            <Space align="center">
              <ShoppingCartOutlined
                style={{ color: "#fcfcfc", fontSize: "25px" }}
              />
              <p className="cart">$0.00</p>
            </Space>
          </div>
        </div>
      </Header>
      <Header className="header-phone">
        {/* <div className="Header"> */}
        <Space className="Header" direction="vertical">
          <Row justify="space-between">
            <Col>
              <div className="logo">
                <Space align="baseline">
                  <h1 className="logo-management">M</h1>
                  <p className="logo-chuwa">chuwa</p>
                </Space>
              </div>
            </Col>
            <Col>
              <Space>
                <div className="user-block">
                  <Space>
                    <UserOutlined
                      style={{ color: "#fcfcfc", fontSize: "20px" }}
                    />
                    {isSignin ? (
                      <SignOut
                        handleSignout={() => {
                          signOut();
                          if (!Cookies.get("_auth")) {
                            setIsSignin(false);
                          }
                        }}
                      />
                    ) : (
                      <SignIn handleLogin={() => setIsSignin(true)} />
                    )}
                  </Space>
                </div>
                <div className="cart-block">
                  <Space align="center">
                    <ShoppingCartOutlined
                      style={{ color: "#fcfcfc", fontSize: "25px" }}
                    />
                    <p className="cart">$0.00</p>
                  </Space>
                </div>
              </Space>
            </Col>
          </Row>
          <input type="text" className="search-box"></input>
        </Space>
        {/* </div> */}
      </Header>
    </div>
  );
};

export default Header;
