import { useEffect, useState } from "react"
import { mock, user } from "./assets/mock"
import { decimalNumber } from "./components/Expenses/Balance"
import { Model, ModelProvider as Provider } from "./components/Tools/ModelProvider"

const mainRedux = new Model({
  user: Model.default,
  residents: Model.newRedux([], {
    set: (state, residents) => residents || Array.from(state)
  }),
  expenses: Model.newRedux([], {
    set: (state, expenses) => expenses || Array.from(state)
  }),
  rooms: Model.newRedux([], {
    set: (state, rooms) => rooms || Array.from(state)
  })
})

const reduxModel = mainRedux.make({ user })
class DataModel {
  #setItem
  #name

  constructor(name, setItem) {
    const [array, setArray] = useState(reduxModel.get(name))
    reduxModel.subscribe(name, setArray)
    this.array = array
    this.#name = name
    this.#setItem = setItem
  }

  set(array) {
    reduxModel.dispatch(this.#name + '.set', Array.from(array))
  }

  add(inputs) {
    const array = this.#setItem(this.array, this.array.length, inputs)
    reduxModel.dispatch(this.#name + '.set', Array.from(array))
  }

  remove(index) {
    this.array.splice(index, 1)
    reduxModel.dispatch(this.#name + '.set', Array.from(this.array))
  }

  update(index, inputs) {
    const array = this.#setItem(this.array, index, inputs)
    reduxModel.dispatch(this.#name + '.set', Array.from(array))
  }
}

function createDataModel(name, setItem) {
  const dataModel = new DataModel(name, setItem)
  return [dataModel.array, dataModel]
}

const modelControler = Object.freeze({
  roomsHook() {
    return createDataModel('rooms', function setRoom(rooms, index, inputs) {
      const newRooms = Array.from(rooms)
      const room = rooms[index]
      newRooms[index] = {
        beds: inputs.hasOwnProperty('beds') ? Number(inputs.beds) : room.beds,
        suite: inputs.hasOwnProperty('suite') ? inputs.suite : room.suite,
        furniture: inputs.hasOwnProperty('furniture') ? inputs.furniture : room.furniture,
        residents: room?.residents ?? []
      }
      return newRooms
    })
  },
  expensesHook() {
    return createDataModel('expenses', function setExpense(expenses, index, inputs) {
      const newExpenses = Array.from(expenses)
      const expense = newExpenses[index] || {}
      newExpenses[index] = {
        type: inputs.hasOwnProperty('type') ? inputs.type : expense.type,
        dueDate: inputs.hasOwnProperty('dueDate') ? Number(inputs.dueDate) : expense.dueDate,
        total: inputs.hasOwnProperty('total') ? decimalNumber(inputs.total) : expense.total,
        payments: inputs.hasOwnProperty('payments') ? inputs.payments : expense.payments
      }
      return newExpenses
    })
  },
  residentsHook() {
    return createDataModel('residents', function setResident(residents, index, inputs) {
      const newResidents = Array.from(residents)
      newResidents[index] = {
        name: inputs.hasOwnProperty('name') ? inputs.name : residents[index].name,
        administrator: inputs.hasOwnProperty('administrator') ? inputs.administrator : residents[index].administrator,
      }
      return newResidents
    })
  },
  roomHook(residentName) {
    return createDataModel('rooms', function setRoom(rooms, index, inputs) {
      const room = inputs.hasOwnProperty('room') ? inputs.room : -1
      const newRooms = Array.from(rooms)
      if (index >= 0) {
        newRooms[index].residents = newRooms[index].residents.filter((resident) => resident !== residentName)
      }
      if ((room >= 0 && room < rooms.length)
        && !rooms[room].residents.includes(residentName)
        && rooms[room].residents.length < rooms[room].beds) {
        newRooms[room].residents.push(residentName)
      }
      return newRooms
    })
  }
})


export function ModelProvider(props) {
  useEffect(() => {
    reduxModel.dispatch('residents.set', mock.residents)
    reduxModel.dispatch('expenses.set', mock.expenses)
    reduxModel.dispatch('rooms.set', mock.rooms)
  }, [])
  return (
    <Provider model={modelControler}>
      {props.children}
    </Provider>
  )
}