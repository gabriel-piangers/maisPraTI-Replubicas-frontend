import { FaTimesCircle } from "react-icons/fa"
export function CloseIcon(props) {
    return (
            <label className='rem-item item-icon' onClick={(inputs) => {
                props.setEditMode(false)
            }}>
            <FaTimesCircle />
        </label>
    )
}