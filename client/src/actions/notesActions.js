import uuid from 'uuid/v4'

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

export const addNoteThunk = () => dispatch => {
  const id = uuid()

  dispatch(addNote({ id }))
}

export const updateNoteThunk = ({ id, note }) => dispatch => {
  // 1. Update API

  // 2. Update note
  dispatch(updateNote({ id, note }))
}
