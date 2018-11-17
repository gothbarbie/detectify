import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

const ModalWrapper = styled.section`
  background-color: #fff;
  border-radius: 4px;
  padding: 3rem 2rem;
`

const Modal = ({ show, children }) => {
  return show ? (
    <ModalBackdrop>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalBackdrop>
  ) : null
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Modal
