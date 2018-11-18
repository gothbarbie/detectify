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
  try {
    // 1. Update API
    const response = API.post('/note', { id, data: note })

    if (response.status === 200) {
      // 2. Update note
      dispatch(updateNote({ id, note }))
    }
  } catch (error) {}
}

export const deleteNoteAndHideModalThunk = ({ id }) => dispatch => {
  try {
    // 1. Delete in API
    const response = API.delete('/note/delete', { id })
    if (response.status === 200) {
      // 2. Delete from store
      dispatch(deleteNote({ id }))
      dispatch(hideModal())
    }
  } catch (error) {}
}

export const loadSavedNotesThunk = () => dispatch => {
  const response = API.get('/note/all')

  for (const id in response.body) {
    dispatch(addNote({ id, note: response.body[id] }))
  }
}
