import { Flex, Typography, Space, Avatar } from "antd";
import { useContext, useEffect, useState } from "react"
import { Checkbox, Select, Option, FormProvider } from "../Tools/FormProvider"
import { FaCheck } from "react-icons/fa"
import { getInitial } from "../../layouts/DashboardLayout";
import { ModelContext } from "../Tools/ModelProvider";
import { EditButtons } from "../CardButtons/EditButtons";
import { EditButton } from "../CardButtons/EditButton";
import { Balance } from "../Expenses/Balance";
const { Text } = Typography

export function Resident(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props

    const model = useContext(ModelContext)
    const [rooms, setRooms] = useState([])
    model.subscribe('rooms', setRooms)
    useEffect(() => {
        model.dispatch('rooms.set')
    }, [])
    const index = rooms.findIndex(room => {
        return room.residents.includes(props.resident.name)
    })
    function setRoom(inputs) {
        const room = inputs.has('room') ? inputs.get('room') : -1
        const newRooms = Array.from(rooms)
        if ((room >= 0 && room < rooms.length)
            && !rooms[room].residents.includes(props.resident.name)
            && rooms[room].residents.length < rooms[room].beds) {
            newRooms[room].residents.push(props.resident.name)
            if (index >= 0) {
                newRooms[index].residents = newRooms[index].residents.filter((resident) => resident !== props.resident.name)
            }
            model.dispatch('rooms.set', newRooms)
        }
    }
    function removeFromRoom () {
         rooms[index].residents = rooms[index].residents.filter((resident) => resident !== props.resident.name)
         model.dispatch('rooms.set', rooms)
    }
    function selectRoom() {
        return (
            <>
                <Text type="secondary">Quarto </Text>
                <Select value={index} name='room' >
                    <Option value={-1} name='room' >
                        nenhum
                    </Option>
                    {
                        rooms.map((room, index) => {
                            return (room.residents.includes(props.resident.name) && index + 1)
                                || (room.residents.length < room.beds && index + 1) || 0
                        })
                            .filter(index => index > 0)
                            .map(index => <Option key={index} value={index - 1} name='room' >{index}</Option>)
                    }
                </Select>
            </>
        )
    }

    return (
        <FormProvider>
            <div className="resident-card-content">

                <>
                    <Flex gap={16} align="center" wrap>
                        <Avatar className="resident-avatar" size={48}>
                            {getInitial(props.resident.name)}
                        </Avatar>
                        <Flex vertical>
                            <Text strong className="resident-name">
                                {props.resident.name}
                            </Text>
                            <Space size="middle">
                                {
                                    editMode
                                        ? selectRoom()
                                        : <>
                                            <Text type="secondary">
                                                Quarto {(index + 1) || 'nenhum'}
                                            </Text>
                                            <Text type="secondary">•</Text>
                                            <Text type="secondary">{props.resident.telefone}</Text>
                                        </>
                                }
                                {
                                    editMode
                                        ? <>
                                            <Text type="secondary">Administrador: </Text>
                                            <Checkbox name='administrator' checked={props.resident.administrator} />
                                        </>
                                        : props.resident.administrator
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

                    {
                        !editMode
                        && <Flex align="center" gap={32}>
                            <Flex vertical align="end">
                                <span>
                                    <Text strong className="resident-value">
                                        Saldo:
                                    </Text>

                                    <Text>
                                        {' R$'} <Balance residentName={props.resident.name} />
                                    </Text>
                                </span>
                            </Flex>
                        </Flex>
                    }
                </>
            </div>

            {
                editMode
                    ? <EditButtons editItem={(inputs) => {
                            setRoom(inputs)
                            editItem(inputs)
                        }}
                        removeItem={() => {
                            removeFromRoom()
                            removeItem()
                        }}
                        setEditMode={setEditMode} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </FormProvider>

    )
}