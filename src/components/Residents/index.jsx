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
    const [residents, setResidents] = useState([])
    model.subscribe('residents', setResidents)
    useEffect(() => {
        model.dispatch('residents.set')
    }, [])
    function setResident(index, inputs) {
        const newResidents = Array.from(residents)
        newResidents[index] = {
            name: inputs.has('name') ? inputs.get('name') : residents[index].name,
            administrator: inputs.has('administrator') ? inputs.get('administrator') : residents[index].administrator,
        }
        model.dispatch('residents.set', newResidents)
    }
    function addResident(inputs) {
        setResident(residents.length, inputs)
    }
    function createRemove(index) {
        return function removeResident() {
            residents.splice(index, 1)
            model.dispatch('residents.set', Array.from(residents))
        }
    }
    function createEdit(index) {
        return function editMorador(inputs) {
            setResident(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = residents.map((resident, index) => {
        return (
            <Card className="resident-card" key={resident.name}>
                <div className="resident-card-container">
                    <Resident resident={resident} 
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