import { useState } from "react"

const none = {
    display: 'none'
}
const modal = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}

<<<<<<< HEAD
=======

>>>>>>> 4fd6ebaa43bbff384d2bdf71b9f8f12006e7627c
export function Modal(props) {
    const [active, setActive] = useState(false)
    const activeModal = props.activeModal || {}
    activeModal.out = setActive
    return (
        <div id={props.id || ''} style={active ? modal : none} >
            {props.children}
        </div>
    )
}