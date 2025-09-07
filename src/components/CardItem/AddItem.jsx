import "../../styles/DashBoardItem.css"
import { Modal } from "../Tools/Modal"
import { FaPlusCircle } from "react-icons/fa"

export function AddItem(props) {
    return (
        <>
            <div className="bottom-line" >
                <label
                    className='add-item item-icon'
                    onClick={(e) => {
                        e.stopPropagation()
                        props.activeModal.out(true)
                    }}>
                    <FaPlusCircle />
                </label>
            </div>
            <Modal activeModal={props.activeModal}>
                <div className="outer-modal" onClick={() => props.activeModal.out(false)}>
                    <div onClick={(e) => e.stopPropagation()} >
                        {props.children}
                    </div>
                </div>
            </Modal>
        </>
    )
}