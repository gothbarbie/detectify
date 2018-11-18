import React from 'react'
import { shallow } from 'enzyme'

import Root from '../../../Root'
import NoteItem from '../NoteItem'

describe('Components/NoteItem', () => {
  it('renders', () => {
    const props = {
      note: {
        id: 'n01',
        title: 'Note Title',
        timestamp: '2018-11-18T14:41:23.630Z',
        category: 'Note Category',
        content: 'Lots of text that fills up the content area.',
      },
      updateNoteThunk: jest.fn(),
      showModalAndSetDeleteNoteIdThunk: jest.fn(),
    }
    const wrapper = shallow(
      <Root>
        <NoteItem {...props} />
      </Root>
    ).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
