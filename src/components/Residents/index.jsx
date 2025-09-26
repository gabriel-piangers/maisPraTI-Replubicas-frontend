import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { ResidentRegisier } from "./ResidentRegisier"
import { Resident } from "./Resident"
import { AddItem } from "../CardButtons/AddItem"
import { useContext, useEffect, useState } from "react";
import { ModelContext } from "../Tools/ModelProvider";

const { Title } = Typography

export function Residents(props) {
    const model = useContext(ModelContext)
    const [residents, residentsModel] = model.residentsHook()
    function addResident(inputs) {
        residentsModel.add(inputs)
    }
    function createRemove(index) {
        return function removeResident() {
            residentsModel.remove(index)
        }
    }
    function createEdit(index) {
        return function editMorador(inputs) {
            residentsModel.update(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = residents.map((resident, index) => {
        return (
            <Card className="resident-card" key={resident.name}>
                    <Resident resident={resident} 
                    editItem={createEdit(index)}
                    removeItem={createRemove(index)} />
            </Card>
        )
    })

    return (
        <>
            <Flex justify="space-between" align="center" className="residents-header">
                <Title level={2} className="residents-title">
                    Moradores
                </Title>
                <AddItem activeModal={activeModal} label="Adicionar Morador">
                    <ResidentRegisier activeModal={activeModal} addResident={addResident} />
                </AddItem>
            </Flex>

            <Flex vertical gap={20}>
                {cards}
            </Flex>
        </>
    )
}