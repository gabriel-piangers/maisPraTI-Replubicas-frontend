import '../styles/Header.css';
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, Layout } from "antd";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const userInitial = "R"; 

  return (
    <AntdHeader className="header">
      <div className="headerRight">
        <IoIosNotificationsOutline className="icon" />
        <Avatar className="avatar">{userInitial}</Avatar>
      </div>
    </AntdHeader>
  );
};
