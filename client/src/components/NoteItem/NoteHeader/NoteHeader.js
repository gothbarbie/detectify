import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import moment from 'moment'

import Icon from '../../Icon'

const NoteHeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;
  background-color: #bbc0c5;
  background-color: ${({ open }) => open && '#7F98B7'};
  height: 6.6rem;
  height: ${({ open }) => open && '2.5rem'};
`

const NoteTitle = styled.h2`
  font-size: 1.3rem;
  color: #222;
  margin: 0;
`

const NoteTime = styled.div`
  font-size: 1.1rem;
  color: #222;
  width: 10rem;
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
  background-color: transparent;
  color: #666;
  font-size: 1.6rem;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const NoteHeader = ({ note, toggle, open }) => (
  <NoteHeaderStyle open={open}>
    <Col>
      <NoteTitle>{note.title}</NoteTitle>
      {!open && (
        <Row>
          <NoteTime>{moment(note.timestamp).fromNow()}</NoteTime>
          <NoteDescription>{note.description}</NoteDescription>
        </Row>
      )}
      {!open && <NoteCategory>{note.category}</NoteCategory>}
    </Col>
    <Button onClick={toggle}>
      {open ? (
        <Icon icon={['fas', 'chevron-up']} />
      ) : (
        <Icon icon={['fas', 'chevron-down']} />
      )}
    </Button>
  </NoteHeaderStyle>
)

NoteHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
}

export default NoteHeader
