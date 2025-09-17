import { Flex, Typography, Space } from "antd";
import { useState } from "react"
import { Input, FormProvider } from "../Tools/FormProvider"
import { EditButtons } from "../CardButtons/EditButtons";
import { EditButton } from "../CardButtons/EditButton";

const { Text } = Typography

export function Room(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props

    function getOccupants() {
        return props.room.residents.map(name => {
            return (
                <Text key={name} type="secondary">
                    {name}
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
                                            <Input value={props.room.beds} name='beds' />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Suite:
                                            </Text>
                                            <Input value={props.room.suite} name='suite' />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Mobília:
                                            </Text>
                                            <Input value={props.room.furniture} name='furniture' />
                                        </Flex>
                                    </>
                                    : <>
                                        <Space size="middle">
                                            <Text type="secondary">
                                                Lugares: {props.room.beds}
                                            </Text>
                                            <Text type="secondary">•</Text>
                                            <Text type="secondary">
                                                Suite: {props.room.suite}
                                            </Text>
                                        </Space>
                                        <span>
                                            <Text type="secondary">
                                                Mobília: {props.room.furniture}
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
                                {getOccupants()}
                            </Flex>
                        </Flex>
                    }
                </>
            </div>
            {
                editMode
                    ? <EditButtons editItem={editItem}
                        setEditMode={setEditMode}
                        removeItem={removeItem} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </FormProvider>
    )
}