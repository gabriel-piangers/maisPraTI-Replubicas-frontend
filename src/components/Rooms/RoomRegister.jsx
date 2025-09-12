import "../../styles/DashboardCadastro.css"
import { FormProvider, Input, Submit } from "../Tools/FormProvider"

export function RoomRegister (props) {
    const addRoom = props.addRoom || (() => {})
    return (
        <FormProvider>
            <form className="std-cadastro dashboard-cadastro">
                <h4>Adicine um novo quarto</h4>
                <label>
                    Lugares: <Input type="text" value="" name="beds" />
                </label>
                <label>
                    Suite: <Input type="text" value="" name="suite" />
                </label>
                <label>
                    Mobília: <Input type="text" value="" name="furniture"/>
                </label>
                <Submit value="adicionar" submit={(inputs)=>{
                    addRoom(inputs)
                    props.activeModal.out(false)
                }} />
            </form>
        </FormProvider>
    )
}