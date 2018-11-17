import React from 'react'
import styled from 'styled-components'

import Button from '../Button'

const DeleteModalBackdrop = styled.div`
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

const Title = styled.h2`
  font-size: 1.6rem;
  color: #666;
  font-weight: 600;
  margin: 0;
  text-align: center;
`

const Text = styled.div`
  font-size: 1.4rem;
  color: #666;
  font-weight: 400;
  margin: 3rem 0;

  span {
    color: #ba3333;
  }
`

const ButtonsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`

const DeleteModal = ({ title, onDelete }) => (
  <DeleteModalBackdrop>
    <ModalWrapper>
      <Title>Title</Title>
      <Text>
        Are you sure you want to <span>delete</span> this note?
      </Text>
      <ButtonsWrapper>
        <Button>Cancel</Button>
        <Button onClick={onDelete} type="red">
          Delete
        </Button>
      </ButtonsWrapper>
    </ModalWrapper>
  </DeleteModalBackdrop>
)

export default DeleteModal
