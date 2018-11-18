import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../../actions/notesActions'

import notesReducer from '../notesReducer'

describe('Reducers/Notes', () => {
  it(`handles ${ADD_NOTE}`, () => {
    const id = 'n01'
    const note = {
      timestamp: '',
      title: 'New Note',
      category: 'Category',
      content: '',
    }
    const action = {
      type: ADD_NOTE,
      payload: { id, note },
    }
    const response = {
      n01: {
        category: 'Category',
        content: '',
        timestamp: '',
        title: 'New Note',
      },
    }

    expect(notesReducer({}, action)).toEqual(response)
  })

  it(`handles ${UPDATE_NOTE}`, () => {
    const id = 'n01'
    const note = {
      timestamp: '',
      title: 'New Note',
      category: 'Category',
      content: '',
    }
    const action = {
      type: UPDATE_NOTE,
      payload: { id, note },
    }
    const response = {
      n01: {
        category: 'Category',
        content: '',
        timestamp: '',
        title: 'New Note',
      },
    }

    expect(notesReducer({}, action)).toEqual(response)
  })

  it(`handles ${DELETE_NOTE}`, () => {
    const id = 'n01'
    const action = {
      type: DELETE_NOTE,
      payload: { id },
    }
    const response = {}

    expect(notesReducer({}, action)).toEqual(response)
  })
})
