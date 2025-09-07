import {
  FaUsers,
  FaHome,
  FaBell,
  FaCog,
  FaTasks,
} from "react-icons/fa";

export const menuItems = [
  {
    key: "/", // 
    label: "Boas-vindas",
    icon: <FaHome />,
  },
  {
    key: "/dashboard/ads", 
    label: "Meus Anúncios",
    icon: <FaBell />,
  },
  {
    key: "/dashboard/residents", 
    label: "Moradores",
    icon: <FaUsers />,
  },
  {
    key: "/dashboard/tasks", 
    label: "Tarefas",
    icon: <FaTasks />,
  },
  {
    key: "/dashboard/settings", 
    label: "Configurações",
    icon: <FaCog />,
  },
];
