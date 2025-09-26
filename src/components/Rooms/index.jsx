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
    const [rooms, roomsModel] = model.roomsHook()
    function addRoom(inputs) {
        roomsModel.add(inputs)
    }
    function createRemove(index) {
        return function removeRoom() {
            roomsModel.remove(index)
        }
    }
    function createEdit(index) {
        return function editRoom(inputs) {
            roomsModel.update(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = rooms.map((room, index) => {
        return (
            <Card className="resident-card" key={index}>
                    <Room room={room} index={index + 1}
                    editItem={createEdit(index)}
                    removeItem={createRemove(index)} />            </Card>
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