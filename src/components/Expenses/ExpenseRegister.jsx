import { Button } from "antd"
import "../../styles/DashboardRegister.css"

export function ExpenseRegister(props) {
    const addExpense = props.addExpense || (()=> {})
    const inputs = {}
    return (
            <form className="std-register dashboard-register" onSubmit={e => e.preventDefault()} >
                <h4>Descreva sua despesa</h4>
                <label>
                    Tipo: <input type="text" value={inputs.type} name="type" onChange={e => inputs.type = e.target.value} />
                </label>
                <label>
                    Data do vencimento: <input type="text" value={inputs.dueDate} name="dueDate" onChange={e => inputs.dueDate = e.target.value} />
                </label>
                <label>
                    Total: <input type="text" value={inputs.total} name="total" onChange={e => inputs.total = e.target.value} />
                </label>
                <Button onClick={()=>{
                    addExpense(inputs)
                    props.activeModal.out(false)
                }} >
                    Adicionar
                </Button>
            </form>
    )
}