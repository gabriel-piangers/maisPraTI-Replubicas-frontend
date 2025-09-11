import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { CadastroMorador } from "./CadastroMorador"
import { Morador } from "./Morador"
import { AddItem } from "../CardItem/AddItem"
import { useContext, useEffect, useState } from "react";
import { ModelContext } from "../Tools/ModelProvider";

const { Title } = Typography

export function ListaMoradores(props) {
    const model = useContext(ModelContext)
    const [moradores, setMoradores] = useState([])
    model.subscribe('moradores', setMoradores)
    useEffect(() => {
        model.dispatch('moradores.set')
    }, [])
    function setMorador(index, inputs) {
        const newMoradores = Array.from(moradores)
        newMoradores[index] = {
            nome: inputs.has('nome') ? inputs.get('nome') : moradores[index].nome,
            administrador: inputs.has('administrador') ? inputs.get('administrador') : moradores[index].administrador,
        }
        model.dispatch('moradores.set', newMoradores)
    }
    function addMorador(inputs) {
        setMorador(moradores.length, inputs)
    }
    function createRemove(index) {
        return function removeMorador() {
            moradores.splice(index, 1)
            model.dispatch('moradores.set', Array.from(moradores))
        }
    }
    function createEdit(index) {
        return function editMorador(inputs) {
            setMorador(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = moradores.map((morador, index) => {
        return (
            <Card className="resident-card" key={morador.nome}>
                <div className="resident-card-container">
                    <Morador morador={morador} 
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
                    <CadastroMorador activeModal={activeModal} addMorador={addMorador} />
                </AddItem>
            </Flex>

            <Flex vertical gap={20}>
                {cards}
            </Flex>
        </>
    )
}