import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "../components/Header";

const { Content } = Layout;

export const AuthLayout = ({ showHeader = true }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {showHeader && <Header />}
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
