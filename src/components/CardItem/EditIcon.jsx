import { FaEllipsisV } from "react-icons/fa"
export function EditIcon(props) {
    return (
        <label className='edit-item item-icon' onClick={
            () => props.editItem()
        }>
            <FaEllipsisV />
        </label>
    )
}