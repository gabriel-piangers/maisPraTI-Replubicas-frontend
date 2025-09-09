import { Flex } from "antd"
import { FaTimesCircle } from "react-icons/fa"

export function CloseIcon(props) {
    return (
        <Flex align="center">
            <Button icon={<FaTimesCircle />}>Editar</Button>
        </Flex>
    )
}