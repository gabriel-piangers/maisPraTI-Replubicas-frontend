import "../../styles/ResidentsPage.css";
import { Card, Typography, Flex } from "antd";
import { ExpenseRegister } from "./ExpenseRegister"
import { AddItem } from "../CardButtons/AddItem"
import { useContext } from "react";
import { ModelContext } from "../Tools/ModelProvider";
import { Expense } from "./Expense";

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
    const [residents] = model.residentsHook()
    const [expenses, expensesModel] = model.expensesHook(residents)
    function addExpense(inputs) {
        expensesModel.add(inputs)
    }
    function createRemove(index) {
        return function removeExpense() {
            expensesModel.remove(index)
        }
    }
    function createEdit(index) {
        return function editExpense(inputs) {
            expensesModel.update(index, inputs)
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