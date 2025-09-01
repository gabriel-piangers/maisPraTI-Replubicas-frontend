import {
  TeamOutlined,
  HomeOutlined,
  NotificationOutlined,
  SettingOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    key: "/",
    label: "Boas-vindas",
    icon: <HomeOutlined />,
  },
  {
    key: "/",
    label: "Meus Anúncios",
    icon: <NotificationOutlined />,
  },
  {
    key: "/residents",
    label: "Moradores",
    icon: <TeamOutlined />,
  },
  {
    key: "/tasks",
    label: "Tarefas",
    icon: <CheckSquareOutlined />,
  },
  {
    key: "/settings",
    label: "Configurações",
    icon: <SettingOutlined />,
  },
];
