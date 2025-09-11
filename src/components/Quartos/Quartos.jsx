import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { CadastroQuarto } from "./CadastroQuarto"
import { AddItem } from "../CardItem/AddItem"
import { useContext, useEffect, useState } from "react";
import { ModelContext } from "../Tools/ModelProvider";
import { Quarto } from "./Quarto";

const { Title } = Typography

export function Quartos(props) {
    const model = useContext(ModelContext)
    const [acomodacoes, setAcomodacoes] = useState([])
    model.subscribe('acomodacoes', setAcomodacoes)
    useEffect(() => {
        model.dispatch('acomodacoes.set')
    }, [])
    function setAcomodacao (index, inputs) {
        const newAcomodacoes = Array.from(acomodacoes)
        const acomodacao = acomodacoes[index]
        newAcomodacoes[index] = {
            lugares: inputs.has('lugares') ? Number(inputs.get('lugares')) : acomodacao.lugares,
            suite: inputs.has('suite') ? inputs.get('suite') : acomodacao.suite,
            mobilia: inputs.has('mobilia') ? inputs.get('mobilia') : acomodacao.mobilia,
            moradores: acomodacao?.moradores ?? []
        }
        model.dispatch('acomodacoes.set', newAcomodacoes)
    }
    function addQuarto(inputs) {
        setAcomodacao(acomodacoes.length, inputs)
    }
    function createRemove(index) {
        return function removeAcomodacao() {
            acomodacoes.splice(index, 1)
            setAcomodacoes(Array.from(acomodacoes))
        }
    }
    function createEdit(index) {
        return function editAcomodacao(inputs) {
            setAcomodacao(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = acomodacoes.map((quarto, index) => {
        return (
            <Card className="resident-card" key={index}>
                <div className="resident-card-container">
                    <Quarto moradores={quarto.moradores} lugares={quarto.lugares}
                    suite={quarto.suite} mobilia={quarto.mobilia} index={index + 1}
                    editItem={createEdit(index)} removeItem={createRemove(index)} />
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
                    <CadastroQuarto activeModal={activeModal} addQuarto={addQuarto} />
                </AddItem>
            </Flex>

            <Flex vertical gap={20}>
                {cards}
            </Flex>
        </>
    )
}