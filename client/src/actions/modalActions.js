export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SET_DELETE_NOTE_ID = 'SET_DELETE_NOTE_ID'

const showModal = () => ({
  type: SHOW_MODAL,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

const setDeleteNoteId = ({ deleteNoteId }) => ({
  type: SET_DELETE_NOTE_ID,
  payload: { deleteNoteId },
})

export const showModalAndSetDeleteNoteIdThunk = ({
  deleteNoteId,
}) => dispatch => {
  dispatch(showModal())
  dispatch(setDeleteNoteId({ deleteNoteId }))
}
