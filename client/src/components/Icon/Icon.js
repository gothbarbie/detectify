import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Icon = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} />
}

Icon.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Icon
