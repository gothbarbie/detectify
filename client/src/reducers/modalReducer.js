import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_DELETE_NOTE_ID,
} from '../actions/modalActions'

const initialState = {
  show: false,
  deleteNoteId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
      }

    case HIDE_MODAL:
      return {
        ...state,
        show: false,
      }

    case SET_DELETE_NOTE_ID:
      return {
        ...state,
        deleteNoteId: action.payload.deleteNoteId,
      }

    default:
      return state
  }
}
