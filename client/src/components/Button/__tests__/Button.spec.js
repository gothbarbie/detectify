import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('Components/Button', () => {
  it('renders default (blue)', () => {
    const props = {
      onClick: jest.fn(),
    }
    const wrapper = shallow(<Button {...props}>Text</Button>)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders red', () => {
    const props = {
      onClick: jest.fn(),
      type: 'red',
    }
    const wrapper = shallow(<Button {...props}>Text</Button>)

    expect(wrapper).toMatchSnapshot()
  })
})
