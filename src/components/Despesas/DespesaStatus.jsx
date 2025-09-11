import "../styles/Linha.css"
import { useState } from 'react'
import { EditItem } from "../CardItem/EditItem"
import { decimal } from "./Saldo"
import { Input } from "../Tools/FormProvider"

export function Despesa(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const despesa = props.despesa
    return (
        <EditItem editMode={editMode} setEditMode={setEditMode} editItem={editItem} removeItem={removeItem}>
           <p>{despesa.tipo}</p>
                <div className="coluna">
                    {
                        editMode
                            ? (
                                <>
                                    <label>
                                        Vencimento:
                                        <Input value={despesa.vencimento} name='vencimento' />
                                    </label>
                                    <label>
                                        Valor:
                                        <Input value={despesa.total} name='total' />
                                    </label>
                                    <label>
                                        Cota:
                                        <Input value={despesa.pagamentos.reduce((valor, pagamento) => {
                                            return pagamento[0] === props.morador ? pagamento[1] : valor
                                        }, 0)} name='cota' />
                                    </label>
                                </>
                            )
                            : (
                                <>
                                    <p>
                                        Vencimento: {decimal(despesa.vencimento)}
                                    </p>
                                    <p>
                                        Valor: {decimal(despesa.total)}
                                    </p>
                                    <p>
                                        Pago: {decimal(despesa.pagamentos
                                            .reduce((total, item) => total + item[1], 0))}
                                    </p>
                                </>
                            )
                    }
            </div>
            <div>
                <div className="linha">
                    <p>
                        Pagamentos
                    </p>
                    <div className="coluna">
                        {
                            despesa.pagamentos.length > 0
                                ? despesa.pagamentos.map(function (pagamento) {
                                    return <p key={pagamento[0]}>
                                        {pagamento[0] + ': ' + decimal(pagamento[1])}
                                    </p>
                                })
                                : <p>Nenhum pagamento</p>
                        }
                    </div>
                </div>
            </div>
        </EditItem>
    )
}