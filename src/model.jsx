import { useEffect } from "react"
import { mock, morador } from "./assets/mock"
import { Model, ModelProvider as Provider } from "./components/Tools/ModelProvider"

const mainModel = new Model({
  usuario: Model.default,
  moradores: Model.newRedux(mock.moradores, {
    set: (state, moradores) => moradores || state
  }),
  tarefas: Model.newRedux(mock.tarefas, {
    set: (state, tarefas) => tarefas || state
  }),
  despesas: Model.newRedux(mock.despesas, {
    set: (state, despesas) => despesas || state
  }),
  acomodacoes: Model.newRedux(mock.acomodacoes, {
    set: (state, acomodacoes) => acomodacoes || state
  })
})

export function ModelProvider(props) {
  const model=mainModel.make({ morador })
  useEffect (()=> {
    model.dispatch('usuario', morador)
    model.dispatch('moradores.set')
  }, [])
  return (
    <Provider model={model}>
      {props.children}
    </Provider>
  )
}