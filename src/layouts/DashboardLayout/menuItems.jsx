import {
  FaUsers,
  FaHome,
  FaCog,
  FaTasks,
  FaWallet,
  FaBed,
} from "react-icons/fa";

import { FaBuildingColumns } from "react-icons/fa6";

export const menuItems = [
  {
    key: "/", //
    label: "Boas-vindas",
    icon: <FaHome />,
  },
  {
    key: "/dashboard/republic",
    label: "Minha republica",
    icon: <FaBuildingColumns />,
  },
  {
    key: "./residents",
    label: "Moradores",
    icon: <FaUsers />,
  },
  {
    key: "./rooms",
    label: "Quartos",
    icon: <FaBed />,
  },
  {
    key: "./expenses",
    label: "Despesas",
    icon: <FaWallet />,
  },
  {
    key: "./tasks",
    label: "Tarefas",
    icon: <FaTasks />,
  },
  {
    key: "/dashboard/settings",
    label: "Configurações",
    icon: <FaCog />,
  },
];
