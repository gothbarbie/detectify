import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_DELETE_NOTE_ID,
} from '../../actions/modalActions'

import modalReducer from '../modalReducer'

describe('Reducers/Modal', () => {
  it(`handles ${SHOW_MODAL}`, () => {
    const action = {
      type: SHOW_MODAL,
    }
    const response = { show: true }

    expect(modalReducer({}, action)).toEqual(response)
  })

  it(`handles ${HIDE_MODAL}`, () => {
    const action = {
      type: HIDE_MODAL,
    }
    const response = { show: false }

    expect(modalReducer({}, action)).toEqual(response)
  })

  it(`handles ${SET_DELETE_NOTE_ID}`, () => {
    const deleteNoteId = 'n01'
    const action = {
      type: SET_DELETE_NOTE_ID,
      payload: { deleteNoteId },
    }
    const response = { deleteNoteId: 'n01' }

    expect(modalReducer({}, action)).toEqual(response)
  })
})
