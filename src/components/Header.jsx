import "../styles/Header.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, Layout } from "antd";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const navigate = useNavigate();
  const userInitial = "R";

  return (
    <AntdHeader className="header">
      <img
        src={logo}
        alt="logo"
        className="header-logo"
        onClick={() => navigate("/")}
      />
      <div className="headerRight">
        <IoIosNotificationsOutline className="icon" />
        <Avatar className="avatar" onClick={() => navigate("login")}>
          {userInitial}
        </Avatar>
      </div>
    </AntdHeader>
  );
};
