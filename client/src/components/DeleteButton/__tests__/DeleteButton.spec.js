import React from 'react'
import { shallow } from 'enzyme'

import DeleteButton from '../DeleteButton'
describe('', () => {
  it('renders', () => {
    const props = {
      onClick: jest.fn(),
    }
    const wrapper = shallow(<DeleteButton {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
