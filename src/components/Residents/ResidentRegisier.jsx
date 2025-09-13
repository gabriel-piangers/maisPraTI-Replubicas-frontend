import "../../styles/DashboardRegister.css"
import { FormProvider, Input, Submit } from "../Tools/FormProvider"

export function ResidentRegisier(props) {
    const addResident = props.addResident || (() => {})
    return (
        <FormProvider>
            <form className="std-register dashboard-register">
                <h4>Adicione um morador</h4>
                <label>
                    Nome: <Input type="text" value="" name="name"/>
                </label>
                <Submit value="adicionar" submit={(inputs)=>{
                    inputs.setup('administrator', [false])
                    addResident(inputs)
                    props.activeModal.out(false)
                }} />
            </form>
        </FormProvider>
    )
}