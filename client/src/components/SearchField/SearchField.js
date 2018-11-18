import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputField = styled.input`
  height: 5rem;
  background-color: #f4f9ff;
  color: #666;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 2rem;
  font-size: 1.4rem;
`

const SearchField = ({ onChange, value }) => (
  <InputField
    type="search"
    name="search"
    placeholder="Search..."
    onChange={onChange}
    value={value}
  />
)

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SearchField
