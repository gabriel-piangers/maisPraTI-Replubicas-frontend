import { Flex, Typography, Space } from "antd";
import { useState } from "react"
import { EditButtons } from "../CardButtons/EditButtons";
import { EditButton } from "../CardButtons/EditButton";

const { Text } = Typography

export function Room(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const room = props.room

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData.entries())
        editItem(payload)
        setEditMode(false)
    }

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
        <form className="resident-card-container" onSubmit={handleFormSubmit}>
            <div className="resident-card-content">
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
                                        <input defaultValue={room.beds} name='beds' />
                                    </Flex>
                                    <Flex gap={8}>
                                        <Text type="secondary">
                                            Suite:
                                        </Text>
                                        <input defaultValue={room.suite} name='suite' />
                                    </Flex>
                                    <Flex gap={8}>
                                        <Text type="secondary">
                                            Mobília:
                                        </Text>
                                        <input defaultValue={room.furniture} name='furniture' />
                                    </Flex>
                                </>
                                : <>
                                    <Space size="middle">
                                        <Text type="secondary">
                                            Lugares: {room.beds}
                                        </Text>
                                        <Text type="secondary">•</Text>
                                        <Text type="secondary">
                                            Suite: {room.suite}
                                        </Text>
                                    </Space>
                                    <span>
                                        <Text type="secondary">
                                            Mobília: {room.furniture}
                                        </Text>
                                    </span>
                                </>
                        }
                    </Flex>
                </Flex>

                {
                   !editMode && <Flex gap={32}>
                        <Text >Moradores: </Text>
                        <Flex vertical gap={8}>
                            {getOccupants()}
                        </Flex>
                    </Flex>
                }
            </div>
            {
                editMode
                    ? <EditButtons 
                        setEditMode={setEditMode}
                        removeItem={removeItem} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </form>
    )
}