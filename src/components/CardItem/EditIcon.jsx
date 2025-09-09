import { Flex } from "antd"
import { FaEdit } from "react-icons/fa"

export function EditIcon(props) {
    return (
        <Flex align="center">
            <Button icon={<FaEdit />}>Editar</Button>
        </Flex>
    )
}