import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "../components/Header";

const { Content } = Layout;

export const AuthLayout = ({ showHeader = true }) => {
  return (
    <Layout>
      {showHeader && <Header />}
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
