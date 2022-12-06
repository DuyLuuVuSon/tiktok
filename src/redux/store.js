import { createStore } from 'redux'
import rootReducer from './reducers'

// 1. config store
const store = createStore(rootReducer)
export default store
