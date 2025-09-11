import { useState, useContext, useEffect } from "react"
import { ModelContext } from '../Tools/ModelProvider'

export function decimal(number) {
    return Number(number.toFixed(2)).toLocaleString()
}
export function decimalNumber(str) {
    return Number(/(,[0-9]{1,2}$|.[0-9]{3}$)/.test(str) ? str.replace('.', '').replace(',', '.') : str)
}
export function Saldo (props) {
    const model = useContext(ModelContext)
    const [moradores, setMoradores] = useState([])
    const [despesas, setDespesas] = useState([])
    model.subscribe('moradores', setMoradores)
    model.subscribe('despesas', setDespesas)
    useEffect(()=> {
        model.dispatch('moradores.set')
        model.dispatch('despesas.set')
    }, [])
    const saldo = despesas.reduce((total, despesa) => {
        return total
            + (despesa.pagamentos.find(item => item[0] === props.nomeMorador) || ['', 0])[1]
            - despesa.total / moradores.length
    }, 0)
    return ' ' + decimal(saldo)
}