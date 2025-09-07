import "../styles/Button.css"
import { useState, useContext } from 'react'
import { ModelContext } from '../Tools/ModelProvider'
import { Tarefa } from "../components/Tarefa"

export function Tarefas(props) {
    const model = useContext(ModelContext)
    const [tarefas, setTarefas] = useState([])
    model.subscribe('tarefas', setTarefas)
    return (
        <ol>
            {
                tarefas.map((props, i) => {
                    return (
                        <li className="list-item" key={props.tarefa}>
                            <Tarefa  tarefa={props.tarefa} responsaveis={props.responsaveis} />
                        </li>
                    )
                })
            }
        </ol>
    )
}