import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'
import NoteHeader from './NoteHeader'

const Article = styled.article`
  border-top: 1px solid #999999;
`

const Main = styled.main`
  background-color: #f4f9ff;
  padding: 1rem;
`

const Datestamp = styled.div`
  font-size: 1.1rem;
  color: #222;
  font-weight: 400;
`

const Category = styled.div`
  font-size: 1.3rem;
  color: #6b85a4;
  font-weight: 700;
`

const Content = styled.textarea`
  padding: 1rem 0;
  font-size: 1.2rem;
  color: #444;
  border: none;
  width: 100%;
  background: transparent;
`

export default class NoteItem extends Component {
  state = {
    open: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  render() {
    const { note } = this.props
    const { open } = this.state

    return (
      <Article>
        <NoteHeader note={note} toggle={this.toggle} open={open} />
        {open && (
          <Main>
            <Datestamp>{note.datestamp}</Datestamp>
            <Category>
              {note.category} <Icon icon={['fas', 'pencil-alt']} />
            </Category>
            <Content>{note.content}</Content>
          </Main>
        )}
      </Article>
    )
  }
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    datestamp: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}
