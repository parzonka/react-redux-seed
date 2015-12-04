import { createStore } from 'redux'
import { counter } from './Counter/Reducer'

export function newStore() {
  return createStore(counter, 0)
}
