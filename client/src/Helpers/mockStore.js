import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

export default mockStore
