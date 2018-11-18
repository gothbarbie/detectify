import {
  CLEAR_NOTES_FILTER,
  SET_NOTES_FILTER,
} from '../actions/notesFilterActions'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES_FILTER:
      return action.payload.filter

    case CLEAR_NOTES_FILTER:
      return initialState

    default:
      return state
  }
}
