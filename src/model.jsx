import { mock, morador } from "./assets/mock"
import { Model, ModelProvider as Provider } from "./components/Tools/ModelProvider"

const mainModel = new Model({
  user: Model.default,
  residents: Model.newRedux(mock.residents, {
    set: (state, residents) => residents || Array.from(state)
  }),
  expenses: Model.newRedux(mock.expenses, {
    set: (state, expenses) => expenses || Array.from(state)
  }),
  rooms: Model.newRedux(mock.rooms, {
    set: (state, rooms) => rooms || Array.from(state)
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