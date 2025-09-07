import {
  FaUsers,
  FaHome,
  FaBell,
  FaCog,
  FaTasks,
  FaWallet,
  FaBed,
} from "react-icons/fa";

export const menuItems = [
  {
    key: "/",
    label: "Boas-vindas",
    icon: <FaHome />,
  },
  {
    key: "/announcements",
    label: "Meus Anúncios",
    icon: <FaBell />,
  },
  {
    key: "./residents",
    label: "Moradores",
    icon: <FaUsers />,
  },
  {
    key: "/rooms",
    label: "Quartos",
    icon: <FaBed />,
  },
  {
    key: "/expenses",
    label: "Despesas",
    icon: <FaWallet />,
  },
  {
    key: "/tasks",
    label: "Tarefas",
    icon: <FaTasks />,
  },
  {
    key: "/settings",
    label: "Configurações",
    icon: <FaCog />,
  },
];
