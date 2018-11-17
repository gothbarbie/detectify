import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from '../Icon'

const NoteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;
`

const NoteTitle = styled.h2`
  font-size: 1.3rem;
  color: #222;
  margin: 0;
`

const NoteTime = styled.div`
  font-size: 1.1rem;
  color: #222;
  width: 6rem;
`

const NoteDescription = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #444;
`

const NoteCategory = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  colors: #444;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Button = styled.button`
  color: #666;
  border: none;
  display: flex;
  align-items: center;
`

export default class NoteItem extends Component {
  render() {
    return (
      <article>
        <NoteHeader>
          <Col>
            <NoteTitle>Example of an Title</NoteTitle>
            <Row>
              <NoteTime>8:01</NoteTime>
              <NoteDescription>Shorter text description...</NoteDescription>
            </Row>
            <NoteCategory>Category</NoteCategory>
          </Col>
          <Button>
            <Icon icon={['fas', 'chevron-down']} />
          </Button>
        </NoteHeader>
        <main>Actual content</main>
      </article>
    )
  }
}
