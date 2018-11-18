import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  showModal,
  hideModal,
  setDeleteNoteId,
  showModalAndSetDeleteNoteIdThunk,
  SHOW_MODAL,
  HIDE_MODAL,
  SET_DELETE_NOTE_ID,
} from '../modalActions'

const createMockStore = configureMockStore([thunk])

describe('Actions/Modal', () => {
  describe('showModal', () => {
    it(`calls with ${SHOW_MODAL}`, () => {
      const action = {
        type: SHOW_MODAL,
      }
      expect(showModal()).toEqual(action)
    })
  })

  describe('hideModal', () => {
    it(`calls with ${HIDE_MODAL}`, () => {
      const action = {
        type: HIDE_MODAL,
      }
      expect(hideModal()).toEqual(action)
    })
  })

  describe('setDeleteNoteId', () => {
    it(`calls with ${SET_DELETE_NOTE_ID}`, () => {
      const deleteNoteId = 'n01'
      const action = {
        type: SET_DELETE_NOTE_ID,
        payload: { deleteNoteId },
      }
      expect(setDeleteNoteId({ deleteNoteId })).toEqual(action)
    })
  })

  describe('Thunks', () => {
    describe('showModalAndSetDeleteNoteIdThunk', () => {
      it(`calls with ${SHOW_MODAL} and ${SET_DELETE_NOTE_ID}`, async () => {
        const store = createMockStore({})
        const deleteNoteId = 'n01'
        const actions = [
          { type: 'SHOW_MODAL' },
          { payload: { deleteNoteId: 'n01' }, type: 'SET_DELETE_NOTE_ID' },
        ]

        await store.dispatch(showModalAndSetDeleteNoteIdThunk({ deleteNoteId }))

        expect(store.getActions()).toEqual(actions)
      })
    })
  })
})
