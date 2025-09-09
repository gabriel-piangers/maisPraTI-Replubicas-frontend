import { useState, useContext } from "react"
import { ModelContext } from '../Tools/ModelProvider'

export function decimal(number) {
    return Number(number.toFixed(2)).toLocaleString()
}
export function Saldo(props) {
    const model = useContext(ModelContext)
    const [morador, setMorador] = useState([])
    const [moradores, setMoradores] = useState([])
    const [despesas, setDespesas] = useState([])
    model.subscribe('usuario', setMorador)
    model.subscribe('moradores', setMoradores)
    model.subscribe('despesas', setDespesas)
    const saldo = despesas.reduce((total, despesa) => {
        return total
            + (despesa.pagamentos.find(item => item[0] === morador) || ['', 0])[1]
            - despesa.total / moradores.length
    }, 0)
    return ' ' + decimal(saldo)
}