import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { ListaMoradores as ResidentsPage } from "../components/Moradores/ListaMoradores";
import { Despesas as ExpensesPage } from "../components/Despesas/Despesas";
import { Quartos as RoomsPage } from "../components/Quartos/Quartos";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout showHeader />}>
          <Route index element={<HomePage />} />
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
