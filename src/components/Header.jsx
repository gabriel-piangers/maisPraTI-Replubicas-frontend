import "../styles/Header.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, Layout, Button } from "antd";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const userInitial = "R"; 

  const isHome = location.pathname === "/";

  return (
    <AntdHeader className="header">
      <div className="headerRight">
        {isAuthenticated ? (
          <>
            {isHome && (
              <Link to="/dashboard">
                <Button type="primary" className="header-btn-dashboard">
                  Dashboard
                </Button>
              </Link>
            )}
            <IoIosNotificationsOutline className="icon" />
            <Avatar className="avatar">{userInitial}</Avatar>
          </>
        ) : (
          <div className="auth-buttons">
            <Link to="/login">
              <Button type="primary" className="header-btn-login">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="header-btn-register">Cadastro</Button>
            </Link>
          </div>
        )}
      </div>
    </AntdHeader>
  );
};
