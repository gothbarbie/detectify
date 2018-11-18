import {
  CLEAR_NOTES_FILTER,
  SET_NOTES_FILTER,
  setNotesFilter,
  clearNotesFilter,
} from '../notesFilterActions'

describe('Actions/NotesFilter', () => {
  describe('setNotesFilter', () => {
    it(`calls with ${SET_NOTES_FILTER}`, () => {
      const filter = 'note content'
      const action = {
        type: SET_NOTES_FILTER,
        payload: { filter },
      }

      expect(setNotesFilter({ filter })).toEqual(action)
    })
  })

  describe('clearNotesFilter', () => {
    it(`calls with ${CLEAR_NOTES_FILTER}`, () => {
      const action = {
        type: CLEAR_NOTES_FILTER,
      }
      expect(clearNotesFilter()).toEqual(action)
    })
  })
})
