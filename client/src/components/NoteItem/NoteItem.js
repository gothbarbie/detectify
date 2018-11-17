import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { connect } from 'react-redux'

import { showModalAndSetDeleteNoteIdThunk } from '../../actions/modalActions'
import { updateNoteThunk } from '../../actions/notesActions'

import Icon from '../Icon'
import DeleteButton from '../DeleteButton'
import NoteHeader from './NoteHeader'

const Article = styled.article`
  border-top: 1px solid #999999;
`

const Main = styled.main`
  background-color: #f4f9ff;
  padding: 1rem;
`

const Timestamp = styled.div`
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

class NoteItem extends Component {
  state = {
    open: false,
    content: '',
    category: '',
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  onChange = event => {
    this.setState({ content: event.target.value })
  }

  onBlur = () => {
    const { note, updateNoteThunk } = this.props
    updateNoteThunk({ id: note.id, content: this.state.content })
  }

  render() {
    const { note, showModalAndSetDeleteNoteIdThunk } = this.props
    const { open } = this.state

    return (
      <Article>
        <NoteHeader note={note} toggle={this.toggle} open={open} />
        {open && (
          <Main>
            <Timestamp>{moment(note.timestamp).fromNow()}</Timestamp>
            <Category>
              {note.category} <Icon icon={['fas', 'pencil-alt']} />
            </Category>
            <Content
              defaultValue={note.content}
              onChange={this.onChange}
              onBlur={this.onBlur}
            />
            <DeleteButton
              onClick={() =>
                showModalAndSetDeleteNoteIdThunk({ deleteNoteId: note.id })
              }
            />
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
    timestamp: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  updateNoteThunk: PropTypes.func.isRequired,
  showModalAndSetDeleteNoteIdThunk: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  showModalAndSetDeleteNoteIdThunk,
  updateNoteThunk,
}

export default connect(
  null,
  mapDispatchToProps
)(NoteItem)
