import { Flex, Typography, Space } from "antd";
import { useState } from "react"
import { EditButtons } from "../CardButtons/EditButtons";
import { EditButton } from "../CardButtons/EditButton";
import { decimalString, decimalNumber } from "./Balance";

const { Text } = Typography

export function Expense(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const [payments, setPayments] = useState(props.expense.payments)

    const expense = props.expense

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData.entries())
        payload.payments = payments
        editItem(payload)
        setEditMode(false)
    }

    function getQuotas() {
        return props.residents.map(name => {
            const payment = (payments.find(([resident]) => resident === name) || [name, 0])
            const quota = payment[1]
            return editMode
                ? <span key={name}>
                    <Text type="secondary">
                        {name}:
                    </Text>
                    {' R$'} <input value={decimalString(quota)} name={'payment' + name} onChange={(e) => {
                        payment[1] = decimalNumber(e.target.value)
                        if (payments.every(payment => payment[0] !== name)) {
                            payments.push(payment)
                        }
                        setPayments(Array.from(payments))
                    }} />
                </span>
                : <span key={name}>
                    <Text type="secondary">
                        {name}:
                    </Text>
                    {' R$ ' + decimalString(quota)}
                </span>
        })
    }

    return (
        <form className="resident-card-container" onSubmit={handleFormSubmit}>
            <div className="resident-card-content">

                <Flex gap={16} align="center" wrap>
                    <Flex vertical>
                        <Text strong className="resident-name">
                            {expense.type}
                        </Text>
                        {
                            editMode
                                ? <>
                                    <Flex gap={8}>
                                        <Text type="secondary">
                                            Vencimento:
                                        </Text>
                                        <input defaultValue={expense.dueDate} name='dueDate' />
                                    </Flex>
                                    <Flex gap={8}>
                                        <Text type="secondary">
                                            Valor:
                                        </Text>
                                        {'R$ '}<input defaultValue={decimalString(expense.total)} name='total' />
                                    </Flex>
                                </>
                                : <Space size="middle">
                                    <Text type="secondary">
                                        Vencimento:
                                    </Text>
                                    {expense.dueDate}

                                    <Text type="secondary">•</Text>
                                    <Text type="secondary">
                                        Valor:
                                    </Text>
                                    {'R$ '}{decimalString(expense.total)}
                                </Space>
                        }
                    </Flex>
                </Flex>

                {
                    <Flex gap={32}>
                        <Text >Pagamentos: </Text>
                        <Flex vertical gap={8}>
                            {getQuotas()}
                        </Flex>
                    </Flex>
                }

            </div>
            {
                editMode
                    ? <EditButtons
                        setEditMode={setEditMode}
                        removeItem={removeItem} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </form>
    )
}