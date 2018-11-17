import React from 'react'
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronDown,
  faChevronUp,
  faEdit,
  faPencilAlt,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(faChevronDown, faChevronUp, faEdit, faPencilAlt, faSearch, faTimes)

ReactDOM.render(<App />, document.getElementById('root'))
