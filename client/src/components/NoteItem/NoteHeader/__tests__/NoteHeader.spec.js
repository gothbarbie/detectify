import React from 'react'
import { shallow } from 'enzyme'

import NoteHeader from '../NoteHeader'
describe('', () => {
  it('renders', () => {
    const props = {
      open: false,
      toggle: jest.fn(),
      note: {
        id: 'n01',
        title: 'Title',
        description: 'Description',
        content: 'Content',
        category: 'News',
        datestamp: '2018-01-01',
      },
    }
    const wrapper = shallow(<NoteHeader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
