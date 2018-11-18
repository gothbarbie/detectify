import React from 'react'
import { shallow } from 'enzyme'

import EditText from '../EditText'

describe('Components/EditText', () => {
  it('renders', () => {
    const props = {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      value: '',
      name: 'name',
    }
    const wrapper = shallow(<EditText {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
