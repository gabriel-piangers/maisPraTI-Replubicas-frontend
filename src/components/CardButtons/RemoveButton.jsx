import { Button } from "antd"

export function RemoveButton (props) {
    return (
        <Button onClick={() => {
            props.removeItem()
            props.setEditMode(false)
        }}>
            Remover
        </Button>
    )
}