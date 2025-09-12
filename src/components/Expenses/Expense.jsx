import { Flex, Typography, Space } from "antd";
import { useState } from "react"
import { Input, FormProvider } from "../Tools/FormProvider"
import { EditButtons } from "../CardButtons/EditButtons";
import { EditButton } from "../CardButtons/EditButton";
import { decimalString } from "./Balance";

const { Text } = Typography

export function Expense(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const expense = props.expense

    function getQuotas() {
        return props.residents.map(name => {
            const quota = (expense.payments.find(([resident]) => resident === name) || [undefined, 0])[1]
            return editMode
                ? <span key={name}>
                    <Text type="secondary">
                        {name}:
                    </Text>
                    {' R$'} <Input value={decimalString(quota)} name={'payment' + name} />
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
        <FormProvider>
            <div className="resident-card-content">
                <>
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
                                            <Input value={expense.dueDate} name='dueDate' />
                                        </Flex>
                                        <Flex gap={8}>
                                            <Text type="secondary">
                                                Valor:
                                            </Text>
                                            {'R$ '}<Input value={decimalString(expense.total)} name='total' />
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
                                        { 'R$ '}{decimalString(expense.total)}
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
                    ? <EditButtons editItem={editItem}
                    setEditMode={setEditMode}
                     removeItem={removeItem} />
                    : <EditButton setEditMode={setEditMode} />
            }
        </FormProvider>
    )
}