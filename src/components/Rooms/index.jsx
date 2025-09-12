import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { RoomRegister } from "./RoomRegister"
import { AddItem } from "../CardButtons/AddItem"
import { useContext, useEffect, useState } from "react";
import { ModelContext } from "../Tools/ModelProvider";
import { Room } from "./Room";

const { Title } = Typography

export function Rooms(props) {
    const model = useContext(ModelContext)
    const [rooms, setRooms] = useState([])
    model.subscribe('rooms', setRooms)
    useEffect(() => {
        model.dispatch('rooms.set')
    }, [])
    function setRoom (index, inputs) {
        const newRooms = Array.from(rooms)
        const room = rooms[index]
        newRooms[index] = {
            beds: inputs.has('beds') ? Number(inputs.get('beds')) : room.beds,
            suite: inputs.has('suite') ? inputs.get('suite') : room.suite,
            furniture: inputs.has('furniture') ? inputs.get('furniture') : room.furniture,
            residents: room?.residents ?? []
        }
        model.dispatch('rooms.set', newRooms)
    }
    function addRoom(inputs) {
        setRoom(rooms.length, inputs)
    }
    function createRemove(index) {
        return function removeRoom() {
            rooms.splice(index, 1)
            model.dispatch('rooms.set', Array.from(rooms))
        }
    }
    function createEdit(index) {
        return function editRoom(inputs) {
            setRoom(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = rooms.map((room, index) => {
        return (
            <Card className="resident-card" key={index}>
                <div className="resident-card-container">
                    <Room room={room} index={index + 1}
                    editItem={createEdit(index)}
                    removeItem={createRemove(index)} />
                </div>
            </Card>
        )
    })

    return (
        <>
            <Flex justify="space-between" align="center" className="residents-header">
                <Title level={2} className="residents-title">
                    Quartos
                </Title>
                <AddItem activeModal={activeModal} label="Adicionar Quarto">
                    <RoomRegister activeModal={activeModal} addRoom={addRoom} />
                </AddItem>
            </Flex>

            <Flex vertical gap={20}>
                {cards}
            </Flex>
        </>
    )
}