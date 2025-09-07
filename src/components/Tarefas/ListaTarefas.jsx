import { useState, useContext } from 'react'
import { ModelContext } from '../Tools/ModelProvider'

export function ListaTarefas(props) {
    const model = useContext(ModelContext)
    const [tarefas, setTarefas] = useState([])
    const [morador, setMoradores] = useState('')
    model.subscribe('tarefas', setTarefas)
    model.subscribe('usuario', setMoradores)
    return (
        <ol>
            {
                tarefas.filter(item => item.responsaveis.includes(morador))
                    .map(item => (
                        <div className='linha cabecalho' key={item.tarefa}>
                            <p>
                                {item.tarefa}
                            </p>
                        </div>
                    ))
            }
        </ol>
    )
}