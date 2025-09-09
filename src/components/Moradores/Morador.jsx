import { Flex, Typography, Space } from "antd";
import { EditItem } from "../CardItem/EditItem"
import { useState } from "react"
import { Checkbox, Input } from "../Tools/FormProvider"
import { FaCheck } from "react-icons/fa"
import { Saldo } from "../Despesas/Saldo"

const Text = {Typography}

export function Morador(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    
    return (
        <EditItem editMode={editMode} setEditMode={setEditMode} editItem={editItem} removeItem={removeItem}>
            <div className="resident-card-content">
                {
                    editMode
                    ? (
                        <>
                            <label>
                                Morador:
                                <Input value={props.morador.nome} name='morador' />
                            </label>
                            <label>
                                Administrador:
                                <Checkbox name='administrador' checked={props.morador.administrador} />
                            </label>
                        </>
                    )
                    : (
                        <>
                            <Flex gap={16} align="center" wrap>
                                <Avatar className="resident-avatar" size={48}>
                                    R
                                </Avatar>
                                <Flex vertical>
                                    <Text strong className="resident-name">
                                        Rafael Santos
                                    </Text>
                                    <Space size="middle">
                                        <Text type="secondary">Quarto {props.morador.quarto}</Text>
                                        <Text type="secondary">•</Text>
                                        <Text type="secondary">{props.morador.telefone}</Text>
                                        {
                                            props.morador.administrador
                                            && (
                                                <>
                                                    <Text type="secondary">•</Text>
                                                    <Text type="secondary">Administrador <FaCheck /></Text>

                                                </>
                                            )
                                        }
                                    </Space>
                                </Flex>
                            </Flex>

                            <Flex align="center" gap={32}>
                                <Flex vertical align="end">
                                    <Text strong className="resident-value">
                                        Saldo: <Saldo morador={props.morador.nome} />
                                    </Text>
                                </Flex>
                            </Flex>
                        </>
                    )
                }
            </div>
        </EditItem>

    )
}