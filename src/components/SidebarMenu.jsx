import { Menu } from "antd"
import { useLocation, useNavigate } from "react-router-dom"

export const SidebarMenu = ({ menuItems }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = (e) => navigate(e.key);

  return (
    <Menu 
        theme="light"
        onClick={handleClick}
        items={menuItems}
        selectedKeys={[pathname]}
        mode="inline"
    />
  )
}

