import "../styles/DashboardCadastro.css"
import { FormProvider, Input, Submit } from "./FormProvider"

export function CadastroDespesa(props) {
    const addDespesa = props.addDespesa || (()=> {})
    return (
        <FormProvider>
            <form className="std-cadastro dashboard-cadastro">
                <h4>Descreva sua despesa</h4>
                <label>
                    Tipo: <Input type="text" value="" name="tipo" />
                </label>
                <label>
                    Data do vencimento: <Input type="text" value="" name="vencimento" />
                </label>
                <label>
                    Total: <Input type="text" value="" name="total"/>
                </label>
                <label>
                    Cota: <Input type="text" value="" name="cota"/>
                </label>
                <Submit value="adicionar" submit={(inputs)=>{
                    addDespesa(inputs)
                    props.activeModal.out(false)
                }} />
            </form>
        </FormProvider>
    )
}