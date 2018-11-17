import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/notesActions'

const initialState = {}

const defaultNote = () => ({
  timestamp: new Date(),
  title: 'New Note',
  category: 'Category',
  description: '',
  content: '',
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        [action.payload.id]: {
          ...(action.payload.note || defaultNote()),
        },
      }

    case UPDATE_NOTE:
      return {
        ...state,
        [action.payload.id]: {
          ...(state[action.payload.id] || defaultNote()),
          ...action.payload.note,
        },
      }

    case DELETE_NOTE:
      delete state[action.payload.id]

      return { ...state }

    default:
      return state
  }
}
