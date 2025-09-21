import React, { useState } from "react";
import { Card, Tag, Button, Typography, Space } from "antd";
import { PlusOutlined, CheckSquareOutlined } from "@ant-design/icons";
import "../styles/TasksPage.css";

const { Title, Text } = Typography;

export const TasksPage = () => {
  const [tasks, setTasks] = useState([
    {
      key: "1",
      name: "Limpeza da sala comum",
      assignedTo: "Ana Costa",
      priority: "Alta",
      dueDate: "Hoje",
    },
    {
      key: "2",
      name: "Comprar produtos de limpeza",
      assignedTo: "Carlos Silva",
      priority: "Média",
      dueDate: "Amanhã",
    },
    {
      key: "3",
      name: "Organizar geladeira",
      assignedTo: "Maria Santos",
      priority: "Baixa",
      dueDate: "2 dias",
    },
    {
      key: "4",
      name: "Limpeza do banheiro 1",
      assignedTo: "João Oliveira",
      priority: "Alta",
      dueDate: "3 dias",
    },
    {
      key: "5",
      name: "Manutenção do jardim",
      assignedTo: "Pedro Lima",
      priority: "Média",
      dueDate: "1 semana",
    },
  ]);

  const handleComplete = (key) => {
    setTasks((prev) => prev.filter((t) => t.key !== key));
  };

  const getTagColor = (priority) => {
    switch (priority) {
      case "Alta":
        return "red";
      case "Média":
        return "magenta";
      default:
        return "gold";
    }
  };

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <Title level={2} className="tasks-title">
          Tarefas
        </Title>
        <Button type="primary" icon={<PlusOutlined />} className="btn-new">
          Nova Tarefa
        </Button>
      </div>

      <Card className="tasks-wrapper-card" bordered>
        <Title level={4} className="tasks-subtitle">
          Tarefas Pendentes
        </Title>

        <Space direction="vertical" size="16" className="tasks-list">
          {tasks.map((task) => (
            <Card key={task.key} className="task-card" bordered>
              <div className="task-left">
                <CheckSquareOutlined className="task-icon" />
                <div className="task-info">
                  <Text className="task-name">{task.name}</Text>
                  <Text className="task-assigned">
                    Atribuída a: {task.assignedTo}
                  </Text>
                </div>
              </div>

              <div className="task-right">
                <Tag color={getTagColor(task.priority)} className="task-tag">
                  {task.priority}
                </Tag>
                <Text className="task-date">{task.dueDate}</Text>
                <Button
                  type="default"
                  className="btn-complete"
                  onClick={() => handleComplete(task.key)}
                >
                  Concluir
                </Button>
              </div>
            </Card>
          ))}
        </Space>
      </Card>
    </div>
  );
};