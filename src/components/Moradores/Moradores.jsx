import "../../styles/Configuracao.css"
import { useEffect, useContext } from 'react'
import { ModelContext } from '../Tools/ModelProvider'
import { ListaMoradores } from "./ListaMoradores"

export function Moradores(props) {
  const model = useContext(ModelContext)
  useEffect(() => {
    model.dispatch('usuario', model.morador)
    model.dispatch('moradores.set')
    model.dispatch('despesas.set')
  }, [])
  return (
    <ListaMoradores />
  )
}