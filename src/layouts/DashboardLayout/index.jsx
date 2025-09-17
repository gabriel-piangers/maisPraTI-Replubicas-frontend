import "../../styles/Dashboard.css";
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Typography, Avatar } from "antd";
import { AiOutlineLogout } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import { menuItems } from "./menuItems";
import { SidebarMenu } from "../../components/SidebarMenu";

const { Sider, Content } = Layout;
const { Text } = Typography;

export function getInitial (userName) {
  return (userName?.trim()?.charAt(0) || "U").toUpperCase();
}

export const DashboardLayout = () => {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const userName = "Rafael Santos";
  const userRole = "Administrador";
  const userInitial = getInitial(userName)

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 1024;
      setIsMobile(isNowMobile);
      setCollapsed(isNowMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const redirectToHome = () => navigate("/");
  const handleLogout = () => {
    navigate("/login");
    logout();
  };

  return (
    <Layout className="layout">
      <Sider
        width={240}
        collapsedWidth="60"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={`sider ${collapsed ? "siderCollapsed" : ""}`}
        style={{ position: "fixed", left: 0, top: 0, bottom: 0 }}
      >
        {collapsed ? (
          <img
            src={Logo}
            alt="Logo"
            onClick={redirectToHome}
            className="logoMobile"
          />
        ) : (
          <div className="logo" onClick={redirectToHome}>
            <Text className="styledText" strong>
              República
            </Text>
          </div>
        )}

        <div className="siderUser">
          <Avatar className="siderUserAvatar" size={30}>
            {userInitial}
          </Avatar>
          {!collapsed && (
            <div className="siderUserInfo">
              <div className="siderUserName">{userName}</div>
              <div className="siderUserRole">{userRole}</div>
            </div>
          )}
        </div>

        <div className="siderDivider" />

        <SidebarMenu menuItems={menuItems} />

        <div className="siderLogout" onClick={handleLogout}>
          <AiOutlineLogout className="siderLogoutIcon" />
          {!collapsed && <span className="siderLogoutLabel">Sair</span>}
        </div>
      </Sider>

      {isMobile && !collapsed && (
        <div className="overlay" onClick={() => setCollapsed(true)} />
      )}

      <Content className={`content ${collapsed ? "contentCollapsed" : ""}`}>
        <div className="wrapper">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
