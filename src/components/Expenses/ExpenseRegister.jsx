import "../../styles/DashboardCadastro.css"
import { FormProvider, Input, Submit } from "../Tools/FormProvider"

export function ExpenseRegister(props) {
    const addExpense = props.addExpense || (()=> {})
    return (
        <FormProvider>
            <form className="std-cadastro dashboard-cadastro">
                <h4>Descreva sua despesa</h4>
                <label>
                    Tipo: <Input type="text" value="" name="type" />
                </label>
                <label>
                    Data do vencimento: <Input type="text" value="" name="dueDate" />
                </label>
                <label>
                    Total: <Input type="text" value="" name="total"/>
                </label>
                <Submit value="adicionar" submit={(inputs)=>{
                    addExpense(inputs)
                    props.activeModal.out(false)
                }} />
            </form>
        </FormProvider>
    )
}