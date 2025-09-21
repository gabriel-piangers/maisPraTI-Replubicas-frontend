import { Flex, Typography, Space } from "antd";
import { useState } from "react"
import { EditButtons } from "../CardButtons/EditButtons";
import { EditButton } from "../CardButtons/EditButton";

const { Text } = Typography

export function Room(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const [beds, setBeds] = useState(props.room.beds)
    const [suite, setSuite] = useState(props.room.suite)
    const [furniture, setFurniture] = useState(props.room.furniture)

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
        <>
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
                                            <input value={beds} name='beds' onChange={(e) => setBeds(e.target.value)} />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Suite:
                                            </Text>
                                            <input value={suite} name='suite' onChange={(e) => setSuite(e.target.value)} />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Mobília:
                                            </Text>
                                            <input value={furniture} name='furniture' onChange={(e) => setFurniture(e.target.value)} />
                                        </Flex>
                                    </>
                                    : <>
                                        <Space size="middle">
                                            <Text type="secondary">
                                                Lugares: {beds}
                                            </Text>
                                            <Text type="secondary">•</Text>
                                            <Text type="secondary">
                                                Suite: {suite}
                                            </Text>
                                        </Space>
                                        <span>
                                            <Text type="secondary">
                                                Mobília: {furniture}
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
                    ? <EditButtons editItem={() => editItem({beds, suite, furniture})}
                        setEditMode={setEditMode}
                        removeItem={removeItem} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </>
    )
}