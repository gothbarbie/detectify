import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../Icon'

const Delete = styled.button`
  color: #ba3333;
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;

  span {
    margin-right: 0.5rem;
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
