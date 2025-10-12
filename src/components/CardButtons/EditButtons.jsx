import { Flex } from "antd"
import { SaveButton } from "./SaveButton"
import { RemoveButton } from "./RemoveButton"
import { CloseEditButton } from "./CloseEditButton"

export function EditButtons (props) {
    return (
        <Flex vertical gap={8}>
            <SaveButton />
            <RemoveButton removeItem={props.removeItem} setEditMode={props.setEditMode} />
            <CloseEditButton setEditMode={props.setEditMode} />
        </Flex>
    )
}