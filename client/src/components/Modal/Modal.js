import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ show, children }) => {
  return show ? <div>{children}</div> : null
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Modal
