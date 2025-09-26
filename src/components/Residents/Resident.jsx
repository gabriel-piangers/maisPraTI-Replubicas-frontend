import { Flex, Typography, Space, Avatar } from "antd";
import { useContext, useMemo, useState } from "react"
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

    const resident = props.resident

    const model = useContext(ModelContext)
    const [rooms, roomsModel] = model.roomHook(props.resident.name)

    function removeFromRoom() {
        roomsModel.update(index, {room: -1})
    }

    function setRoom(inputs) {
        roomsModel.update(index, inputs)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const room = formData.get('room')
        formData.delete('room')
        const payload = Object.fromEntries(formData.entries())
        payload.administrator = payload.hasOwnProperty("administrator") ? true : false
        editItem(payload)
        setRoom({ room })
        setEditMode(false)
    }


    const index = rooms.findIndex(room => {
        return room.residents.includes(props.resident.name)
    })

    function selectRoom() {
        return (
            <>
                <Text type="secondary">Quarto </Text>
                <select defaultValue={index} name='room' >
                    <option value={-1} name='room' >
                        nenhum
                    </option>
                    {
                        rooms.map((room, index) => {
                            return (room.residents.includes(props.resident.name) && index + 1)
                                || (room.residents.length < room.beds && index + 1) || 0
                        })
                            .filter(index => index > 0)
                            .map(index => <option key={index} value={index - 1} name='room' >{index}</option>)
                    }
                </select>
            </>
        )
    }

    return (
        <form className="resident-card-container" onSubmit={handleFormSubmit}>
            <div className="resident-card-content">

                <Flex gap={16} align="center" wrap>
                    <Avatar className="resident-avatar" size={48}>
                        {getInitial(resident.name)}
                    </Avatar>
                    <Flex vertical>
                        <Text strong className="resident-name">
                            {resident.name}
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
                                        <Text type="secondary">{resident.telefone}</Text>
                                    </>
                            }
                            {
                                editMode
                                    ? <>
                                        <Text type="secondary">Administrador: </Text>
                                        <input type="checkbox" defaultChecked={resident.administrator} name='administrator' />
                                    </>
                                    : resident.administrator
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
            </div>

            {
                editMode
                    ? <EditButtons
                        removeItem={() => {
                            removeFromRoom()
                            removeItem()
                        }}
                        setEditMode={setEditMode} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </form>

    )
}