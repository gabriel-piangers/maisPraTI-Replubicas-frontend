import "../styles/DashboardCadastro.css"
import { FormProvider, Input, Submit } from "../Tools/FormProvider"

export function CadastroAcomodacao (props) {
    const addAcomodacao = props.addAcomodacao || (() => {})
    return (
        <FormProvider>
            <form className="std-cadastro dashboard-cadastro">
                <h4>Adicine um novo quarto</h4>
                <label>
                    Lugares: <Input type="text" value="" name="lugares" />
                </label>
                <label>
                    Suite: <Input type="text" value="" name="suite" />
                </label>
                <label>
                    Mobília: <Input type="text" value="" name="mobilia"/>
                </label>
                <Submit value="adicionar" submit={(inputs)=>{
                    addAcomodacao(inputs)
                    props.activeModal.out(false)
                }} />
            </form>
        </FormProvider>
    )
}