import React from 'react'
import { shallow } from 'enzyme'

import NoteHeader from '../NoteHeader'

describe('Components/NoteItem/NoteHeader', () => {
  it('renders closed', () => {
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
      setEditTitle: jest.fn(),
      title: 'Note Title',
      timestamp: '',
      description: '',
      category: 'Note Category',
      editTitle: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }
    const wrapper = shallow(<NoteHeader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders open', () => {
    const props = {
      open: true,
      toggle: jest.fn(),
      note: {
        id: 'n01',
        title: 'Title',
        description: 'Description',
        content: 'Content',
        category: 'News',
        datestamp: '2018-01-01',
      },
      setEditTitle: jest.fn(),
      title: 'Note Title',
      timestamp: '',
      description: '',
      category: 'Note Category',
      editTitle: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }
    const wrapper = shallow(<NoteHeader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
