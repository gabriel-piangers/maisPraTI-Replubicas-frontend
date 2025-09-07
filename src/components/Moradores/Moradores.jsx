import "../../styles/Configuracao.css"
import { useState, useContext } from 'react'
import { ModelContext } from '../Tools/ModelProvider'
import { ListaMoradores } from "./ListaMoradores"

export function Moradores(props) {
  const model = useContext(ModelContext)
  const [moradores, setMoradores] = useState([])
  model.subscribe('moradores', setMoradores)
  return (
    <section className="casa">
      <div className="casa-card std-card">
        <h3>Moradores</h3>
        <ListaMoradores moradores={moradores}
          setMoradores={(newMoradores) => model.dispatch('moradores.set', newMoradores)} />
      </div>
    </section>
  )
}