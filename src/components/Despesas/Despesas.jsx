import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { CadastroDespesa } from "./CadastroDespesa"
import { AddItem } from "../CardItem/AddItem"
import { useContext, useEffect, useState } from "react";
import { ModelContext } from "../Tools/ModelProvider";
import { Despesa } from "./Despesa";
import { decimalNumber } from "./Saldo";

const { Title } = Typography

function getListaMoradores (moradores) {
    const lista = []
    for (const morador of moradores) {
        lista.push(morador.nome)
    }
    return lista
}

export function Despesas (props) {
    const model = useContext(ModelContext)
    const [despesas, setDespesas] = useState([])
    const [moradores, setMoradores] = useState([])
    model.subscribe('despesas', setDespesas)
    model.subscribe('moradores', setMoradores)
    useEffect(()=> {
        model.dispatch('despesas.set')
        model.dispatch('moradores.set')
    }, [])
    function setDespesa(index, inputs) {
        const newDespesas = Array.from(despesas)
        const despesa = newDespesas[index] || {}
        newDespesas[index] = {
            tipo: inputs.has('tipo') ? inputs.get('tipo') : despesa.tipo,
            vencimento: inputs.has('vencimento') ? Number(inputs.get('vencimento')) : despesa.vencimento,
            total: inputs.has('total') ? decimalNumber(inputs.get('total')) : despesa.total,
            pagamentos: despesa.pagamentos || []
        }
        for (let {nome: morador} of moradores) {
            const pagamento = newDespesas[index].pagamentos.find(pagamento => pagamento[0] === morador)
            if (pagamento) {
                pagamento[1] = decimalNumber(inputs.get('pagamento' + morador))
            } else {
                newDespesas[index].pagamentos.push([morador, decimalNumber(inputs.get('pagamento' + morador))])
            }
        }
        model.dispatch('despesas.set', newDespesas)
    }
    function addDespesa(inputs) {
        setDespesa(despesas.length, inputs)
    }
    function createRemove(index) {
        return function removeDespesa() {
            despesas.splice(index, 1)
            setDespesas(Array.from(despesas))
        }
    }
    function createEdit(index) {
        return function editDespesa(inputs) {
            setDespesa(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = Array.from(despesas).reverse().map((despesa, i) => {
        const index = (despesas.length - 1) - i
        return (
            <Card className="resident-card" key={i}>
                <div className="resident-card-container">
                    <Despesa despesa={despesa}
                        moradores={getListaMoradores(moradores)}
                        removeItem={createRemove(index)}
                        editItem={createEdit(index)} />
                </div>
            </Card>
        )
    })
    return (
        <>
            <Flex justify="space-between" align="center" className="residents-header">
                <Title level={2} className="residents-title">
                    Despesas
                </Title>
                <AddItem activeModal={activeModal} label="Adicionar Despesa">
                    <CadastroDespesa activeModal={activeModal} addDespesa={addDespesa} />
                </AddItem>
            </Flex>

            <Flex vertical gap={20}>
                {cards}
            </Flex>
        </>
    )
}