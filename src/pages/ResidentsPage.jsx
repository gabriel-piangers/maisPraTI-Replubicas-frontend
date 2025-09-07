import "../styles/ResidentsPage.css";
import { Avatar, Badge, Button, Card, Flex, Typography, Space } from "antd";
import { FaPlus, FaEdit } from "react-icons/fa";

const { Title, Text } = Typography;

export const ResidentsPage = () => {
  return (
    <>
      <Flex justify="space-between" align="center" className="residents-header">
        <Title level={2} className="residents-title">
          Moradores
        </Title>
        <Button type="primary" icon={<FaPlus />} className="btn-edit">
          Adicionar Morador
        </Button>
      </Flex>

      <Flex vertical gap={20}>
        <Card className="resident-card">
          <div className="resident-card-content">
            <Flex gap={16} align="center">
              <Avatar className="resident-avatar" size={48}>
                R
              </Avatar>
              <Flex vertical>
                <Text strong className="resident-name">
                  Rafael Santos
                </Text>
                <Space size="middle">
                  <Text type="secondary">Quarto 1</Text>
                  <Text type="secondary">•</Text>
                  <Text type="secondary">(11) 99999-1111</Text>
                </Space>
              </Flex>
            </Flex>

            <Flex align="center" gap={32}>
              <Flex vertical align="end">
                <Text strong className="resident-value">
                  R$ 800,00
                </Text>
                <Badge color="#ff0000" text="Atrasado" />
              </Flex>
              <Button icon={<FaEdit />}>Editar</Button>
            </Flex>
          </div>
        </Card>

        <Card className="resident-card">
          <div className="resident-card-content">
            <Flex gap={16} align="center">
              <Avatar className="resident-avatar" size={48}>
                R
              </Avatar>
              <Flex vertical>
                <Text strong className="resident-name">
                  Rafael Santos
                </Text>
                <Space size="middle">
                  <Text type="secondary">Quarto 1</Text>
                  <Text type="secondary">•</Text>
                  <Text type="secondary">(11) 99999-1111</Text>
                </Space>
              </Flex>
            </Flex>

            <Flex align="center" gap={32}>
              <Flex vertical align="end">
                <Text strong className="resident-value">
                  R$ 800,00
                </Text>
                <Badge color="#52c41a" text="Em dia" />
              </Flex>
              <Button icon={<FaEdit />}>Editar</Button>
            </Flex>
          </div>
        </Card>
        <Card className="resident-card">
          <div className="resident-card-content">
            <Flex gap={16} align="center">
              <Avatar className="resident-avatar" size={48}>
                R
              </Avatar>
              <Flex vertical>
                <Text strong className="resident-name">
                  Rafael Santos
                </Text>
                <Space size="middle">
                  <Text type="secondary">Quarto 1</Text>
                  <Text type="secondary">•</Text>
                  <Text type="secondary">(11) 99999-1111</Text>
                </Space>
              </Flex>
            </Flex>

            <Flex align="center" gap={32}>
              <Flex vertical align="end">
                <Text strong className="resident-value">
                  R$ 800,00
                </Text>
                <Badge color="#52c41a" text="Em dia" />
              </Flex>
              <Button icon={<FaEdit />}>Editar</Button>
            </Flex>
          </div>
        </Card>
        <Card className="resident-card">
          <div className="resident-card-content">
            <Flex gap={16} align="center">
              <Avatar className="resident-avatar" size={48}>
                R
              </Avatar>
              <Flex vertical>
                <Text strong className="resident-name">
                  Rafael Santos
                </Text>
                <Space size="middle">
                  <Text type="secondary">Quarto 1</Text>
                  <Text type="secondary">•</Text>
                  <Text type="secondary">(11) 99999-1111</Text>
                </Space>
              </Flex>
            </Flex>

            <Flex align="center" gap={32}>
              <Flex vertical align="end">
                <Text strong className="resident-value">
                  R$ 800,00
                </Text>
                <Badge color="#f00" text="Atrasado" />
              </Flex>
              <Button icon={<FaEdit />}>Editar</Button>
            </Flex>
          </div>
        </Card>
      </Flex>
    </>
  );
};
