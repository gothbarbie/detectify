import React from 'react'
import { shallow } from 'enzyme'

import Icon from '../Icon'

describe('Components/Icon', () => {
  it('renders', () => {
    const wrapper = shallow(<Icon />)

    expect(wrapper).toMatchSnapshot()
  })
})
