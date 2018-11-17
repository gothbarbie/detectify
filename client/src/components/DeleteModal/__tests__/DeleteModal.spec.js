import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import mockStore from '../../../Helpers/mockStore'

import DeleteModal from '../DeleteModal'

describe('Components/DeleteModal', () => {
  it('renders', () => {
    const modal = {
      show: true,
      deleteNoteId: 'n01',
    }
    const notes = {
      n01: {
        title: 'Note Title',
        timestamp: '',
        description: '',
        category: '',
        content: '',
      },
    }

    const initialState = {
      modal,
      notes,
    }

    const store = mockStore(initialState)

    const props = {
      deleteNoteAndHideModalThunk: jest.fn(),
      hideModal: jest.fn(),
    }
    const wrapper = shallow(
      <Provider store={store}>
        <DeleteModal {...props} store={store} />
      </Provider>
    ).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
