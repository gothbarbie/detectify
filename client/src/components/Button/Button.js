import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DefaultButton = styled.button`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 400;
  background-color: transparent;
  border-radius: 2px;
  border: none;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RedButton = styled(DefaultButton)`
  background-color: #ba3333;
`

const BlueButton = styled(DefaultButton)`
  background-color: #7f98b7;
`

const Button = ({ children, type, onClick }) => {
  return type === 'red' ? (
    <RedButton onClick={onClick}>{children}</RedButton>
  ) : (
    <BlueButton onClick={onClick}>{children}</BlueButton>
  )
}

Button.defaultProps = {
  type: 'blue',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
