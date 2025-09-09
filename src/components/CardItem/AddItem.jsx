import "../../styles/DashBoardItem.css"
import { Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { Modal } from "../Tools/Modal"

export function AddItem(props) {
    return (
        <>
            <Button type="primary" icon={<FaPlus />} className="btn-edit" onClick={(e) => {
                e.stopPropagation()
                props.activeModal.out(true)
            }}>
                Adicionar Morador
            </Button>
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