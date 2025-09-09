import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Moradores as ResidentsPage } from "../components/Moradores/Moradores";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout showHeader />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="residents" element={<ResidentsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
