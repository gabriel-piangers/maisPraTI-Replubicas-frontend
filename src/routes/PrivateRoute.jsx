import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Spin } from 'antd';

const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Spin tip="Carregando..." size="large">{content}</Spin>;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  
  return <Navigate to="/login" />;
};

export default PrivateRoute;