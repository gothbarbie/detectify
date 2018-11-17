import uuid from 'uuid/v4'

import { hideModal } from './modalActions'

export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

const addNote = ({ id, note }) => ({
  type: ADD_NOTE,
  payload: { id, note },
})

const updateNote = ({ id, note }) => ({
  type: UPDATE_NOTE,
  payload: { id, note },
})

const deleteNote = ({ id }) => ({
  type: DELETE_NOTE,
  payload: { id },
})

export const addNoteThunk = () => dispatch => {
  // 1. Request new Note from API

  // 2. Add new Note to Store
  const id = uuid()

  dispatch(addNote({ id }))
}

export const updateNoteThunk = ({ id, note }) => dispatch => {
  // 1. Update API

  // 2. Update note
  dispatch(updateNote({ id, note }))
}

export const deleteNoteAndHideModalThunk = ({ id }) => dispatch => {
  // 1. Delete in API
  // 2. Delete from store
  dispatch(deleteNote({ id }))
  dispatch(hideModal())
}
