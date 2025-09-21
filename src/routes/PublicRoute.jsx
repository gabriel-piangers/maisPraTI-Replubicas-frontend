import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


function PublicRoute() {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />
}

export default PublicRoute