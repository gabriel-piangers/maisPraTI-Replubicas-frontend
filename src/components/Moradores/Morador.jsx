import "../../styles/Linha.css"
import { EditItem } from "../CardItem/EditItem"
import { useState } from "react"
import { Checkbox, Input } from "../Tools/FormProvider"
import { FaCheck } from "react-icons/fa"

export function Morador(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    return (
        <EditItem editMode={editMode} setEditMode={setEditMode} editItem={editItem} removeItem={removeItem}>
            {
                editMode
                    ? (
                        <>
                            <label>
                                Morador:
                                <Input value={props.morador.nome} name='morador' />
                            </label>
                            <label>
                                Administrador:
                                <Checkbox name='administrador' checked={props.morador.administrador} />
                            </label>
                        </>
                    )
                    : (
                        <>
                            <p>
                                Morador: {props.morador.nome}
                            </p>
                            {
                                props.morador.administrador
                                && (
                                    <p>
                                        Administrador: <FaCheck />
                                    </p>
                                )
                            }
                        </>
                    )
            }
        </EditItem>

    )
}