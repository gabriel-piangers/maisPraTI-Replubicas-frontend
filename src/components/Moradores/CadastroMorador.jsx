import "../../styles/DashboardCadastro.css"
import { FormProvider, Input, Submit } from "../Tools/FormProvider"

export function CadastroMorador(props) {
    const addMorador = props.addMorador || (() => {})
    return (
        <FormProvider>
            <form className="std-cadastro dashboard-cadastro">
                <h4>Adicione um morador</h4>
                <label>
                    Nome: <Input type="text" value="" name="nome"/>
                </label>
                <Submit value="adicionar" submit={(inputs)=>{
                    inputs.setup('administrador', [true])
                    addMorador(inputs)
                    props.activeModal.out(false)
                }} />
            </form>
        </FormProvider>
    )
}