import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { ExpenseRegister } from "./ExpenseRegister"
import { AddItem } from "../CardButtons/AddItem"
import { useContext, useEffect, useState } from "react";
import { ModelContext } from "../Tools/ModelProvider";
import { Expense } from "./Expense";
import { decimalNumber } from "./Balance";

const { Title } = Typography

function getResidentsList (residents) {
    const list = []
    for (const resident of residents) {
        list.push(resident.name)
    }
    return list
}

export function Expenses (props) {
    const model = useContext(ModelContext)
    const [expenses, setExpenses] = useState([])
    const [residents, setResidents] = useState([])
    model.subscribe('expenses', setExpenses)
    model.subscribe('residents', setResidents)
    useEffect(()=> {
        model.dispatch('expenses.set')
        model.dispatch('residents.set')
    }, [])
    function setExpense(index, inputs) {
        const newExpenses = Array.from(expenses)
        const expense = newExpenses[index] || {}
        newExpenses[index] = {
            type: inputs.has('type') ? inputs.get('type') : expense.type,
            dueDate: inputs.has('dueDate') ? Number(inputs.get('dueDate')) : expense.dueDate,
            total: inputs.has('total') ? decimalNumber(inputs.get('total')) : expense.total,
            payments: expense.payments || []
        }
        for (let {name: resident} of residents) {
            const payment = newExpenses[index].payments.find(payment => payment[0] === resident)
            if (payment) {
                payment[1] = decimalNumber(inputs.get('payment' + resident))
            } else {
                newExpenses[index].payments.push([resident, decimalNumber(inputs.get('payment' + resident))])
            }
        }
        model.dispatch('expenses.set', newExpenses)
    }
    function addExpense(inputs) {
        setExpense(expenses.length, inputs)
    }
    function createRemove(index) {
        return function removeExpense() {
            expenses.splice(index, 1)
            model.dispatch('expenses.set', Array.from(expenses))
        }
    }
    function createEdit(index) {
        return function editExpense(inputs) {
            setExpense(index, inputs)
        }
    }
    const activeModal = { out: () => { } }

    const cards = Array.from(expenses).reverse().map((expense, i) => {
        const index = (expenses.length - 1) - i
        return (
            <Card className="resident-card" key={i}>
                <div className="resident-card-container">
                    <Expense expense={expense}
                        residents={getResidentsList(residents)}
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
                    <ExpenseRegister activeModal={activeModal} addExpense={addExpense} />
                </AddItem>
            </Flex>

            <Flex vertical gap={20}>
                {cards}
            </Flex>
        </>
    )
}