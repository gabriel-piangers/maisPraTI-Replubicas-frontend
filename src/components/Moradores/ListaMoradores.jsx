import "../../styles/ListItem.css"
import { CadastroMorador } from "./CadastroMorador"
import { Morador } from "./Morador"
import { AddItem } from "../CardItem/AddItem"

export function ListaMoradores(props) {
    function setMorador(index, inputs) {
        const newMoradores = Array.from(props.moradores)
        newMoradores[index] = {
            nome: inputs.has('nome') ? inputs.get('nome') : props.moradores[index].nome,
            administrador: inputs.has('administrador') ? inputs.get('administrador') : props.moradores[index].administrador,
        }
        props.setMoradores(newMoradores)
    }
    function addMorador(inputs) {
        setMorador(props.moradores.length, inputs)
    }
    function createRemove(index) {
        return function removeMorador() {
            props.moradores.splice(index, 1)
            props.setMoradores(Array.from(props.moradores))
        }
    }
    function createEdit(index) {
        return function editMorador(inputs) {
            setMorador(index, inputs)
        }
    }
    const activeModal = { out: () => { } }
    return (
        <>
            <ol>
                {
                    props.moradores.map((morador, index) => {
                        return (
                            <li key={morador.nome}>
                                <div className='list-item' >
                                    <Morador morador={morador} editItem={createEdit(index)}
                                        removeItem={createRemove(index)} />
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
            <AddItem activeModal={activeModal}>
                <CadastroMorador activeModal={activeModal} addMorador={addMorador} />
            </AddItem>
        </>
    )
}