import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Residents as ResidentsPage } from "../components/Residents";
import { Expenses as ExpensesPage } from "../components/Expenses";
import { Rooms as RoomsPage } from "../components/Rooms";
import { TasksPage } from "../pages/TasksPage";
import { AuthProvider } from "../contexts/AuthContext";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { MyRepublic } from "../pages/MyRepublic";

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas Públicas */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<AuthLayout showHeader />}/>
            <Route path="/" element={<HomePage />} />

            <Route path="dashboard" element={<DashboardLayout />}>
            {/* <Route element={<PrivateRoute />}> */}
              <Route path="dashboard" element={<DashboardLayout />}/>
              <Route path="residents" element={<ResidentsPage />} />
              <Route path="tasks" element={<TasksPage />} />
              <Route path="expenses" element={<ExpensesPage />} />
              <Route path="rooms" element={<RoomsPage />} />
              <Route path="republic" element={<MyRepublic />}>
            {/* </Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
