import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'

const Button = styled.button`
  border: none;
  background-color: transparent;
`

const EditButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon={['fas', 'pencil-alt']} />
  </Button>
)

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default EditButton
