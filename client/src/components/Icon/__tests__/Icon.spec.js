import React from 'react'
import { shallow } from 'enzyme'

import Icon from '../Icon'
describe('', () => {
  it('renders', () => {
    const wrapper = shallow(<Icon />)

    expect(wrapper).toMatchSnapshot()
  })
})
