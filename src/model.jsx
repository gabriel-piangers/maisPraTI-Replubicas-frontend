import { useEffect, useState } from "react"
import { mock, user } from "./assets/mock"
import { decimalNumber } from "./components/Expenses/Balance"
import { Model, ModelProvider as Provider } from "./components/Tools/ModelProvider"

const mainRedux = new Model({
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

const reduxModel = mainRedux.make({ user })
class DataModel {
  #setItem
  #name

  constructor(name, setItem) {
    const [array, setArray] = useState([])
    reduxModel.subscribe(name, setArray)
    useEffect(() => {
      reduxModel.dispatch(name + '.set')
    }, [])
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
        beds: inputs.has('beds') ? Number(inputs.get('beds')) : room.beds,
        suite: inputs.has('suite') ? inputs.get('suite') : room.suite,
        furniture: inputs.has('furniture') ? inputs.get('furniture') : room.furniture,
        residents: room?.residents ?? []
      }
      return newRooms
    })
  },
  expensesHook(residents) {
    return createDataModel('expenses', function setExpense(expenses, index, inputs) {
      const newExpenses = Array.from(expenses)
      const expense = newExpenses[index] || {}
      newExpenses[index] = {
        type: inputs.has('type') ? inputs.get('type') : expense.type,
        dueDate: inputs.has('dueDate') ? Number(inputs.get('dueDate')) : expense.dueDate,
        total: inputs.has('total') ? decimalNumber(inputs.get('total')) : expense.total,
        payments: expense.payments || []
      }
      for (let { name: resident } of residents) {
        const payment = newExpenses[index].payments.find(payment => payment[0] === resident)
        if (payment) {
          payment[1] = decimalNumber(inputs.get('payment' + resident))
        } else {
          newExpenses[index].payments.push([resident, decimalNumber(inputs.get('payment' + resident))])
        }
      }
      return newExpenses
    })
  },
  residentsHook() {
    return createDataModel('residents', function setResident(residents, index, inputs) {
      const newResidents = Array.from(residents)
      newResidents[index] = {
        name: inputs.has('name') ? inputs.get('name') : residents[index].name,
        administrator: inputs.has('administrator') ? inputs.get('administrator') : residents[index].administrator,
      }
      return newResidents
    })
  },
  roomHook(residentName) {
    return createDataModel('rooms', function setRoom(rooms, index, inputs) {
      const room = inputs.has('room') ? inputs.get('room') : -1
      const newRooms = Array.from(rooms)
      if ((room >= 0 && room < rooms.length)
        && !rooms[room].residents.includes(residentName)
        && rooms[room].residents.length < rooms[room].beds) {
        newRooms[room].residents.push(residentName)
        if (index >= 0) {
          newRooms[index].residents = newRooms[index].residents.filter((resident) => resident !== residentName)
        }
        return newRooms
      }
      return rooms
    })
  }
})


export function ModelProvider(props) {
  return (
    <Provider model={modelControler}>
      {props.children}
    </Provider>
  )
}