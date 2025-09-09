import { mock, morador } from "./assets/mock"
import { Model, ModelProvider as Provider } from "./components/Tools/ModelProvider"

const mainModel = new Model({
  usuario: Model.default,
  moradores: Model.newRedux(mock.moradores, {
    set: (state, moradores) => moradores || Array.from(state)
  }),
  tarefas: Model.newRedux(mock.tarefas, {
    set: (state, tarefas) => tarefas || Array.from(state)
  }),
  despesas: Model.newRedux(mock.despesas, {
    set: (state, despesas) => despesas || Array.from(state)
  }),
  acomodacoes: Model.newRedux(mock.acomodacoes, {
    set: (state, acomodacoes) => acomodacoes || Array.from(state)
  })
})

const model = mainModel.make({ morador })

export function ModelProvider(props) {
  return (
    <Provider model={model}>
      {props.children}
    </Provider>
  )
}