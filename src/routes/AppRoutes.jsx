import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Residents as ResidentsPage } from "../components/Residents";
import { Expenses as ExpensesPage } from "../components/Expenses";
import { Rooms as RoomsPage } from "../components/Rooms";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout showHeader />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="residents" element={<ResidentsPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="rooms" element={<RoomsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
