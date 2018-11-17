import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'

const Button = styled.button`
  width: 100%;
  background-color: #6b85a4;
  color: #dfdfdf;
  font-size: 1.8rem;
  font-weight: 600;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    margin-right: 1rem;
  }
`

const NewNoteButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <span>New Note </span>
    <Icon icon={['fas', 'edit']} />
  </Button>
)

NewNoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default NewNoteButton
