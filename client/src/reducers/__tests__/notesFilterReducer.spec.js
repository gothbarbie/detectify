import {
  CLEAR_NOTES_FILTER,
  SET_NOTES_FILTER,
} from '../../actions/notesFilterActions'

import notesFilterReducer from '../notesFilterReducer'

describe('Reducers/NotesFilter', () => {
  it(`handles ${CLEAR_NOTES_FILTER}`, () => {
    const action = {
      type: CLEAR_NOTES_FILTER,
    }
    const response = ''

    expect(notesFilterReducer({}, action)).toEqual(response)
  })

  it(`handles ${SET_NOTES_FILTER}`, () => {
    const filter = 'text'
    const action = {
      type: SET_NOTES_FILTER,
      payload: { filter },
    }
    const response = 'text'

    expect(notesFilterReducer({}, action)).toEqual(response)
  })
})
