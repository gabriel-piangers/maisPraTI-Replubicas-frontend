import { Flex, Typography, Space } from "antd";
import { useState } from "react"
import { Input, FormProvider } from "../Tools/FormProvider"
import { SaveButton } from "../CardItem/SaveButton";
import { CloseEditButton } from "../CardItem/CloseEditButton";
import { RemoveButton } from "../CardItem/RemoveButton";
import { EditButton } from "../CardItem/EditButton";

const { Text } = Typography

export function Quarto(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const despesa = props.despesa

    function getOcupantes() {
        return props.moradores.map(nome => {
            return (
                <Text key={nome} type="secondary">
                    {nome}
                </Text>
            )
        })
    }

    return (
        <FormProvider>
            <div className="resident-card-content">
                <>
                    <Flex gap={16} align="center" wrap>
                        <Flex vertical>
                            <Text strong className="resident-name">
                                Qurato {props.index}
                            </Text>
                            {
                                editMode
                                    ? <>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Lugares:
                                            </Text>
                                            <Input value={props.lugares} name='lugares' />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Suite:
                                            </Text>
                                            <Input value={props.suite} name='suite' />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Mobília:
                                            </Text>
                                            <Input value={props.mobilia} name='mobilia' />
                                        </Flex>
                                    </>
                                    : <>
                                        <Space size="middle">
                                            <Text type="secondary">
                                                Lugares: {props.lugares}
                                            </Text>
                                            <Text type="secondary">•</Text>
                                            <Text type="secondary">
                                                Suite: {props.suite}
                                            </Text>
                                        </Space>
                                        <span>
                                            <Text type="secondary">
                                                Mobília: {props.mobilia}
                                            </Text>
                                        </span>
                                    </>
                            }
                        </Flex>
                    </Flex>

                    {
                        <Flex gap={32}>
                            <Text >Moradores: </Text>
                            <Flex vertical gap={8}>
                                {getOcupantes()}
                            </Flex>
                        </Flex>
                    }
                </>
            </div>
            {
                editMode
                    ? <Flex vertical gap={8}>
                        <SaveButton editItem={editItem} setEditMode={setEditMode} />
                        <RemoveButton removeItem={removeItem} setEditMode={setEditMode} />
                        <CloseEditButton setEditMode={setEditMode} />
                    </Flex>
                    : <EditButton setEditMode={setEditMode} />
            }
        </FormProvider>
    )
}