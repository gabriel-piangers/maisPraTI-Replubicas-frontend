import { Flex, Button } from "antd"
import { FaEdit } from "react-icons/fa"

export function EditButton (props) {
    return (
        <Flex align="center">
            <Button icon={<FaEdit />} onClick={() => props.setEditMode(true)}>
                Editar
            </Button>
        </Flex>
    )
}