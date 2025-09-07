import "../styles/Button.css"
import "../styles/Dashboard.css"
import { useContext, useEffect, useState } from "react"
import { Saldo } from "../components/Saldo"
import { ListaTarefas } from "../components/ListaTarefas"
import { Despesas } from "../components/Despesas"
import { Tarefas } from "../components/Tarefas"
import { ModelContext } from "./Tools/ModelProvider"
import { Link, useNavigate } from "react-router-dom"


export function Dashboard (props) {
    const model = useContext(ModelContext)
    const navigate = useNavigate()
    const [morador, setMorador] = useState('')
    model.subscribe('usuario', setMorador)

    useEffect(() => {
        if (!model.morador) {
            navigate('/')
        } else {
            model.dispatch('moradores.set')
            model.dispatch('despesas.set')
            model.dispatch('tarefas.set')
            model.dispatch('usuario', model.morador)
        }
    })

    return (
        <div id="dashboard-container">
            <aside>
              <Link to="/configuracao">Configuração</Link>
            </aside>
            <main>
                <h2>Bem vindo {morador}!</h2>
                <section className="status">
                    <div className="status-morador">
                        <div className="status-morador-card std-card">
                            <h3> Meu saldo</h3>
                            <p>
                                Saldo: 
                                <span className='status-morador-card-saldo'>
                                    <Saldo />
                                </span>
                            </p>
                        </div>
                        <div className="status-morador-card std-card">
                            <h3>Minha tarefas</h3>
                            <div>
                                <ListaTarefas />
                                <a>Ver todas as minhas tarefas.</a>
                            </div>
                        </div>
                        <div className="grafico">
                        </div>
                    </div>
                    <div className="status-casa">
                        <div className="status-casa-card std-card">
                            <h3>Despesas do mês</h3>
                            <Despesas />
                        </div>
                        <div className="status-casa-card std-card">
                            <h3>Tarefas da Semana</h3>
                            <Tarefas />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}