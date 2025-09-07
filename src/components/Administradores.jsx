import { useState, useContext } from 'react'
import { ListaMoradores } from "./ListaMoradores"
import { ModelContext } from './Tools/ModelProvider'

export function Administradores(props) {
  const model = useContext(ModelContext)
  const [administradores, setAdministradores] = useState([])
  model.subscribe('administradores', setAdministradores)
  return <ListaMoradores moradores={administradores}
    setMoradores={(newAdministradores) => model.dispatch('administradores.set', newAdministradores)} />
}