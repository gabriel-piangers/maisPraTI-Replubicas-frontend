import { Button } from "antd"

export function SaveButton(props) {
    return (
        <Button onClick={() => {
            props.editItem()
            props.setEditMode(false)
        }}>
            Salvar
        </Button>
    )
}