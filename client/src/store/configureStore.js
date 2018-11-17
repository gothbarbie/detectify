import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notes from '../reducers/notesReducer'
import modal from '../reducers/modalReducer'

const rootReducer = combineReducers({
  notes,
  modal,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
