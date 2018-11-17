import React from 'react'
import { shallow } from 'enzyme'

import Icon from '../Icon'

describe('Components/Icon', () => {
  it('renders', () => {
    const props = {
      icon: ['fas', 'times'],
    }
    const wrapper = shallow(<Icon {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
