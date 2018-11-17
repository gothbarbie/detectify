import React from 'react'
import { shallow } from 'enzyme'

import Modal from '../Modal'

describe('Components/Modal', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Modal show={true}>
        <div>Content</div>
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
