import React from 'react'
import { shallow } from 'enzyme'

import EditButton from '../EditButton'

describe('Components/EditButton', () => {
  it('renders', () => {
    const props = {
      onClick: jest.fn(),
    }
    const wrapper = shallow(<EditButton {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
