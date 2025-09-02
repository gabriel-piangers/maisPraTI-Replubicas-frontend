import {
  FaUsers,
  FaHome,
  FaBell,
  FaCog,
  FaTasks,
} from "react-icons/fa";

export const menuItems = [
  {
    key: "/",
    label: "Boas-vindas",
    icon: <FaHome />,
  },
  {
    key: "/",
    label: "Meus Anúncios",
    icon: <FaBell />,
  },
  {
    key: "/residents",
    label: "Moradores",
    icon: <FaUsers />,
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
