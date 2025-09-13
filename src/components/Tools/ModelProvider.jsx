import { createContext, useMemo } from "react"


export class Model {
    static #Reduxer = class Reduxer {

        #initial
        #reduxers

        #makeStateRedux(state, reduxers) {
          return function stateRedux(reduxName, value) {
            state.value = reduxers[reduxName](state.value, value)
            return state.value
          }
        }

        #makeExecRedux(stateRedux, reduxName) {
          return function exec(value) {
            return stateRedux(reduxName, value)
          }
        }

        constructor(initial, reduxers) {
          this.#initial = initial
          this.#reduxers = reduxers
        }

        make(state) {
          var obj = {}
          state.value = this.#initial
          var stateRedux = this.#makeStateRedux(state, this.#reduxers)
          for (var reduxName in this.#reduxers) {
            if (this.#reduxers.hasOwnProperty(reduxName)) {
              obj[reduxName] = this.#makeExecRedux(stateRedux, reduxName)
            }
          }
          return obj
        }
      }

      static default = new Model.#Reduxer(undefined, { redux: (state, value) => value })
      
      #props
      #states
      #reduxers
      
      static newRedux (state, reduxers) {
        return new Model.#Reduxer(state, reduxers)
      }

      constructor(props, instanceProps) {
          instanceProps = instanceProps || {}
          this.#props = props
          for (var propName in instanceProps) {
              if (instanceProps.hasOwnProperty(propName) && !Model.prototype.hasOwnProperty(propName)) {
                  this[propName] = instanceProps[propName]
              }
          }
      }

      get(name) {
          return this.#states[name].state.value
      }

      dispatch(reduxName, value) {
          var stateName = this.#reduxers[reduxName].state
          var callbacks = this.#states[stateName].callbacks
          this.#states[stateName].queue = callbacks
          this.#states[stateName].callbacks = []
          var result = this.#reduxers[reduxName].redux(value)
          for (var i = 0; i < callbacks.length; i++) {
              callbacks[i](result, reduxName.slice(stateName.length + 1))
          }
          this.#states[stateName].queue = []
      }

      subscribe(name, callback) {
        var id = this.#states[name].callbacks.length
        this.#states[name].callbacks.push(callback)
        return () => {
          if (this.#states[name].callbacks[id] === callback) {
            this.#states[name].callbacks.splice(id, 1)
            this.#states[name].queue.splice(id, 1)
          }
        }
      }

      make(instanceProps) {
        var props = this.#props
        var instance = new this.constructor(props, instanceProps)
        instance.#states = {}
        instance.#reduxers = {}
        for (var name in props) {
          var state = {}
          if (props.hasOwnProperty(name) && props[name] instanceof Model.#Reduxer) {
            var defaultReduxer = Model.default.make(state)
            if (props[name] === Model.default) {
              instance.#reduxers[name] = {
                state: name,
                redux: defaultReduxer.redux
              }
            } else {
              var redux = props[name].make(state)
              for (var reduxName in redux) {
                if (redux.hasOwnProperty(reduxName)) {
                  instance.#reduxers[name + '.' + reduxName] = {
                    state: name,
                    redux: redux[reduxName]
                  }
                }
              }
            }
            instance.#states[name] = {
              callbacks: [],
              queue: [],
              state
            }
          }
        }
        return instance
    }
  }

  export const ModelContext = createContext()

  export function ModelProvider(props) {

    const model = useMemo(() => props.model, [])

    return (
      <ModelContext.Provider value={model}>
        {props.children}
      </ModelContext.Provider>
    )
}
