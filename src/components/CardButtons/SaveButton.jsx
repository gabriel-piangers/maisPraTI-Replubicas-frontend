import { Submit } from "../Tools/FormProvider"
import { Button } from "antd"

export function SaveButton (props) {
    return (
        <Submit wrap submit={(inputs) => {
            props.editItem(inputs)
            props.setEditMode(false)
        }}>
            <Button>
                Salvar
            </Button>
        </Submit>
    )
}