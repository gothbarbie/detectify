import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextInput = styled.input`
  background-color: transparent;
  border: none;
`

const EditText = ({ name, onChange, onBlur, value }) => (
  <TextInput name={name} onBlur={onBlur} onChange={onChange} value={value} />
)

EditText.propTypes = {
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default EditText
