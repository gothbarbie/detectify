import React, { Component } from 'react'
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

export default class SearchField extends Component {
  render() {
    return <InputField type="search" name="search" placeholder="Search..." />
  }
}
