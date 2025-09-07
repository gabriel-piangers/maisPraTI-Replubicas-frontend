import "../styles/Linha.css"
import { useState } from 'react'
import { EditItem } from "../CardItem/EditItem"
import { Input } from "../Tools/FormProvider"

export function Acomodacao(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props
    const despesa = props.despesa
    return (
        <EditItem editMode={editMode} setEditMode={setEditMode} editItem={editItem} removeItem={removeItem}>
            <p>Quarto</p>
                <div className="coluna">
                    {
                        editMode
                            ? (
                                <>
                                    <label>
                                        Lugares:
                                        <Input value={props.lugares} name='lugares' />
                                    </label>
                                    <label>
                                        Suite:
                                        <Input value={props.suite} name='suite' />
                                    </label>
                                    <label>
                                        Mobília:
                                        <Input value={props.mobilia} name='mobilia' />
                                    </label>
                                </>
                            )
                            : (
                                <>
                                    <p>
                                        Lugares: {props.lugares}
                                    </p>
                                    <p>
                                        Suite: {props.suite}
                                    </p>
                                    <p>
                                        Mobília: {props.mobilia}
                                    </p>
                                </>
                            )
                    }
            </div>
            <div className='linha'>
                <p>
                    Moradores
                </p>
                <div className="coluna">
                    {
                        props.moradores.map(morador => {
                            return <p key={morador}>
                                {morador}
                            </p>
                        })
                    }
                </div>
            </div>
        </EditItem>
    )
}
