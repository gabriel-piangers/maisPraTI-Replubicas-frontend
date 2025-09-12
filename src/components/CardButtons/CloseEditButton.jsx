import { Button, Flex } from "antd"
import { FaTimesCircle } from "react-icons/fa"

export function CloseEditButton (props) {
    return (
        <Flex align="center">
            <Button icon={<FaTimesCircle />} onClick={
               ()=> props.setEditMode(false)
            }>
                Fechar
            </Button>
        </Flex>
    )
}