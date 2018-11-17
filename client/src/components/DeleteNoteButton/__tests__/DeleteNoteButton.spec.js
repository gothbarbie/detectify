import React from 'react'
import { shallow } from 'enzyme'

import DeleteNoteButton from '../DeleteNoteButton'

describe('Components/DeleteNoteButton', () => {
  it('renders', () => {
    const props = {
      onClick: jest.fn(),
    }
    const wrapper = shallow(<DeleteNoteButton {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
