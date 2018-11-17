import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../Icon'

const Delete = styled.button`
  color: #ba3333;
  font-size: 1.3rem;

  span {
    margin-right: 1rem;
  }
`

const DeleteButton = ({ onClick }) => (
  <Delete onClick={onClick}>
    <span>Delete Note</span> <Icon icon={['fas', 'times']} />
  </Delete>
)

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default DeleteButton
