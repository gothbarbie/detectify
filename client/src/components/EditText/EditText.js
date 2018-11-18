import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextInput = styled.input`
  background-color: transparent;
`

const EditText = ({ onChange, onBlur, value }) => (
  <TextInput onBlur={onBlur} onChange={onChange} value={value} />
)

EditText.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default EditText
