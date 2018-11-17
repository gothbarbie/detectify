import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import defaultStore from './store/configureStore'

const Root = ({ store, children }) => (
  <Provider store={store ? store : defaultStore}>{children}</Provider>
)

Root.propTypes = {
  store: PropTypes.shape({}),
  children: PropTypes.node,
}

export default Root
