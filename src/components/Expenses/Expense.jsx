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
    const [dueDate, setDueDate] = useState(props.expense.dueDate)
    const [total, setTotal] = useState(props.expense.total)

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
        <>
            <div className="resident-card-content">
                <>
                    <Flex gap={16} align="center" wrap>
                        <Flex vertical>
                            <Text strong className="resident-name">
                                {props.expense.type}
                            </Text>
                            {
                                editMode
                                    ? <>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Vencimento:
                                            </Text>
                                            <input value={dueDate} name='dueDate' onChange={(e) => setDueDate(e.target.value)} />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Valor:
                                            </Text>
                                            {'R$ '}<input value={decimalString(total)} name='total' onChange={(e) => setTotal(decimalNumber(e.target.value))} />
                                        </Flex>
                                    </>
                                    : <Space size="middle">
                                        <Text type="secondary">
                                            Vencimento:
                                        </Text>
                                        {dueDate}

                                        <Text type="secondary">•</Text>
                                        <Text type="secondary">
                                            Valor:
                                        </Text>
                                        { 'R$ '}{decimalString(total)}
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
                </>
            </div>
            {
                editMode
                    ? <EditButtons editItem={() => editItem({payments, dueDate, total})}
                    setEditMode={setEditMode}
                     removeItem={removeItem} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </>
    )
}