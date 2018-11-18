import { hideModal } from './modalActions'
import PretendAPI from '../Utils/PretendAPI'

export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

const API = new PretendAPI()

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
  // Request new Note from API
  const response = API.post('/note/new')
  dispatch(addNote({ id: response.body.id, note: response.body.data }))
}

export const updateNoteThunk = ({ id, note }) => dispatch => {
  // 1. Update API
  const response = API.post('/note', { id, note })
  console.log(response)
  // 2. Update note
  dispatch(updateNote({ id, note }))
}

export const deleteNoteAndHideModalThunk = ({ id }) => dispatch => {
  // 1. Delete in API
  const response = API.delete(id)
  console.log('delete', response)
  // 2. Delete from store
  dispatch(deleteNote({ id }))
  dispatch(hideModal())
}

export const loadSavedNotesThunk = () => dispatch => {
  const response = API.getAll()

  for (const id in response.body) {
    dispatch(addNote({ id, note: response.body[id] }))
  }
}
