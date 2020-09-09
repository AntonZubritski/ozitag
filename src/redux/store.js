import { createStore, applyMiddleware } from 'redux'
import navReducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(navReducer, applyMiddleware(thunk))

export default store