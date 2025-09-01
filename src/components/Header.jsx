import '../styles/Header.css';
import { BellOutlined } from "@ant-design/icons";
import { Avatar, Layout } from "antd";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const userInitial = "R"; 

  return (
    <AntdHeader className="header">
      <div className="headerRight">
        <BellOutlined className="icon" />
        <Avatar className="avatar">{userInitial}</Avatar>
      </div>
    </AntdHeader>
  );
};
