import "../styles/Configuracao.css"
import { useContext, useEffect } from "react"
import { Administradores } from "./Administradores"
import { Moradores } from "./Moradores"
import { Acomodacoes } from "./Acomodacoes"
import { ModelContext } from "./Tools/ModelProvider"
import { Link } from "react-router-dom"


export function Configuracao (props) {
    const model = useContext(ModelContext)

    useEffect(() => {
        model.dispatch('administradores.set')
        model.dispatch('moradores.set')
        model.dispatch('acomodacoes.set')
    })

    return (
        <div id="dashboard-container">
            <aside>
                <Link to="/">Despesas e tarefas</Link>
            </aside>
            <main>
                <section className="casa">
                        <div className="casa-card std-card">
                            <h3>Administradores</h3>
                            <Administradores/>
                       </div>
                        <div className="casa-card std-card">
                            <h3>Moradores</h3>
                            <Moradores/>
                       </div>
                        <div className="casa-card std-card">
                            <h3>Quartos</h3>
                            <Acomodacoes/>
                       </div>    
                </section>
            </main>
        </div>
    )
}