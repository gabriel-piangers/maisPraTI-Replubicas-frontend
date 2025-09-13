import { useState, useContext, useEffect } from "react"
import { ModelContext } from '../Tools/ModelProvider'

export function decimalString(number) {
    return Number(number.toFixed(2)).toLocaleString()
}
export function decimalNumber(str) {
    return Number(/(,[0-9]{1,2}$|.[0-9]{3}$)/.test(str) ? str.replace('.', '').replace(',', '.') : str)
}
export function Balance (props) {
    const model = useContext(ModelContext)
    const [residents] = model.residentsHook()
    const [expenses] = model.expensesHook(residents)
    const balance = expenses.reduce((total, expense) => {
        return total
            + (expense.payments.find(item => item[0] === props.residentName) || ['', 0])[1]
            - expense.total / residents.length
    }, 0)
    return ' ' + decimalString(balance)
}