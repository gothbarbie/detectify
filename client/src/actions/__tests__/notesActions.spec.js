import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  addNote,
  updateNote,
  deleteNote,
  addNoteThunk,
  updateNoteThunk,
  deleteNoteAndHideModalThunk,
  loadSavedNotesThunk,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../notesActions'

const createMockStore = configureMockStore([thunk])

describe('Actions/Notes', () => {
  describe('addNote', () => {
    it(`calls with ${ADD_NOTE}`, () => {
      const id = 'n01'
      const note = {
        title: 'Note Title',
        category: 'Note Category',
        timestamp: '',
      }
      const action = {
        type: ADD_NOTE,
        payload: { id, note },
      }
      expect(addNote({ id, note })).toEqual(action)
    })
  })

  describe('updateNote', () => {
    it(`calls with ${UPDATE_NOTE}`, () => {
      const id = 'n01'
      const note = {
        title: 'Note Title',
        category: 'Note Category',
        timestamp: '',
      }
      const action = {
        type: UPDATE_NOTE,
        payload: { id, note },
      }
      expect(updateNote({ id, note })).toEqual(action)
    })
  })

  describe('deleteNote', () => {
    it(`calls with ${DELETE_NOTE}`, () => {
      const id = 'n01'
      const action = {
        type: DELETE_NOTE,
        payload: { id },
      }
      expect(deleteNote({ id })).toEqual(action)
    })
  })

  describe('Thunks', () => {
    const RealDate = Date

    function mockDate(isoDate) {
      global.Date = class extends RealDate {
        constructor() {
          return new RealDate(isoDate)
        }
      }
    }
    let store

    beforeEach(() => {
      store = createMockStore({})
      mockDate('2017-11-25T12:34:56z')
    })

    afterEach(() => {
      global.Date = RealDate
      jest.resetAllMocks()
    })

    describe('addNoteThunk', () => {
      it(`uses API.post('/note/new') to get a new Note`, async () => {
        const deleteNoteId = 'n01'
        const actions = [
          {
            payload: {
              id: expect.anything(),
              note: {
                category: 'Category',
                content: '',
                timestamp: expect.anything(),
                title: 'New Note',
              },
            },
            type: 'ADD_NOTE',
          },
        ]

        await store.dispatch(addNoteThunk({ deleteNoteId }))

        expect(store.getActions()).toEqual(actions)
      })
    })

    describe('updateNoteThunk', () => {
      it(`uses API.post('/note) to update a Note`, async () => {
        const id = 'n01'
        const note = {
          category: 'New Category',
          content: 'New Content',
          timestamp: '2017-11-25T12:34:56z',
          title: 'New Title',
        }

        const actions = [
          {
            payload: {
              id: 'n01',
              note: {
                category: 'New Category',
                content: 'New Content',
                timestamp: '2017-11-25T12:34:56z',
                title: 'New Title',
              },
            },
            type: 'UPDATE_NOTE',
          },
        ]

        await store.dispatch(updateNoteThunk({ id, note }))

        expect(store.getActions()).toEqual(actions)
      })
    })

    describe('deleteNoteAndHideModalThunk', () => {
      it(`uses API.post('/note/delete') to delete a Note`, async () => {
        const id = 'n01'

        const actions = []

        await store.dispatch(deleteNoteAndHideModalThunk({ id }))

        expect(store.getActions()).toEqual(actions)
      })
    })

    describe('loadSavedNotesThunk', () => {
      it('', () => {})
    })
  })
})
