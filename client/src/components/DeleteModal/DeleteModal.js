import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteNoteAndHideModalThunk } from '../../actions/notesActions'
import { hideModal } from '../../actions/modalActions'

import Button from '../Button'

const Title = styled.h2`
  font-size: 1.6rem;
  color: #666;
  font-weight: 600;
  margin: 0;
  text-align: center;
`

const Text = styled.div`
  font-size: 1.4rem;
  color: #666;
  font-weight: 400;
  margin: 3rem 0;

  span {
    color: #ba3333;
  }
`

const ButtonsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`

const DeleteModal = ({
  deleteNoteAndHideModalThunk,
  hideModal,
  note,
  deleteNoteId,
}) => (
  <div>
    <Title>{note.title}</Title>
    <Text>
      Are you sure you want to <span>delete</span> this note?
    </Text>
    <ButtonsWrapper>
      <Button onClick={hideModal}>Cancel</Button>
      <Button
        onClick={() => deleteNoteAndHideModalThunk({ id: deleteNoteId })}
        type="red"
      >
        Delete
      </Button>
    </ButtonsWrapper>
  </div>
)

DeleteModal.propTypes = {
  deleteNoteAndHideModalThunk: PropTypes.func.isRequired,
  deleteNoteId: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

const mapStateToProps = state => {
  const deleteNoteId = state.modal.deleteNoteId
  const note = state.notes[deleteNoteId]
  return { note, deleteNoteId }
}

const mapDispatchToProps = {
  hideModal,
  deleteNoteAndHideModalThunk,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal)
