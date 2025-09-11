import "../styles/ListItem.css"
import { useState, useContext } from 'react'
import { Despesa } from "../components/Despesa"
import { AddItem } from "../components/AddItem"
import { CadastroDespesa } from "../CadastroDespesa"
import { ModelContext } from './ModelProvider'

export function Despesas (props) {
    const model = useContext(ModelContext)
    const [despesas, setDespesas] = useState([])
    const [morador, setMorador] = useState('')
    model.subscribe('despesas', setDespesas)
    model.subscribe('usuario', setMorador)
    function setDespesa(index, inputs) {
        const newDespesas = Array.from(despesas)
        const despesa = newDespesas[index] || {}
        newDespesas[index] = {
            tipo: inputs.has('tipo') ? inputs.get('tipo') : despesa.tipo,
            vencimento: inputs.has('vencimento') ? Number(inputs.get('vencimento')) : despesa.vencimento,
            total: inputs.has('total') ? Number(inputs.get('total')) : despesa.total,
            pagamentos: despesa.pagamentos || []
        }
        if (inputs.has('cota')) {
            const pagamento = newDespesas[index].pagamentos.find(pagamento => pagamento[0] === morador)
            if (pagamento) {
                pagamento[1] = Number(inputs.get('cota'))
            } else {
                newDespesas[index].pagamentos.push([morador, Number(inputs.get('cota'))])
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
    return (
        <>
            <ol>
                {
                    Array.from(despesas).reverse().map((despesa, i) => {
                        const index = (despesas.length - 1) - i
                        return (
                            <li className="list-item" key={i}>
                                <Despesa morador={morador} despesa={despesa} removeItem={createRemove(index)} editItem={createEdit(index)} />
                            </li>
                        )
                    })
                }
            </ol>
            <AddItem activeModal={activeModal}>
                <CadastroDespesa activeModal={activeModal} addDespesa={addDespesa} />
            </AddItem>
        </>
    )
}