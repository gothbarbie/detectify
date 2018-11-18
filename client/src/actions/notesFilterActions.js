export const CLEAR_NOTES_FILTER = 'CLEAR_NOTES_FILTER'
export const SET_NOTES_FILTER = 'SET_NOTES_FILTER'

export const setNotesFilter = ({ filter }) => ({
  type: SET_NOTES_FILTER,
  payload: { filter },
})

export const clearNotesFilter = () => ({
  type: CLEAR_NOTES_FILTER,
})
