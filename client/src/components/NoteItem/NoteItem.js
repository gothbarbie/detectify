import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { connect } from 'react-redux'

import { showModalAndSetDeleteNoteIdThunk } from '../../actions/modalActions'
import { updateNoteThunk } from '../../actions/notesActions'

import EditButton from '../EditButton'
import DeleteNoteButton from '../DeleteNoteButton'
import NoteHeader from './NoteHeader'
import EditText from '../EditText'

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
    editCategory: false,
    editTitle: false,
    title: this.props.note.title,
    content: this.props.note.content,
    category: this.props.note.category,
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  setEditCategory = () =>
    this.setState({
      editCategory: true,
    })

  setEditTitle = () => this.setState({ editTitle: true })

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onBlur = () => {
    const { note, updateNoteThunk } = this.props
    const { title, content, category } = this.state
    const date = new Date()
    const updatedNote = {
      title,
      timestamp: date.toISOString(),
      category,
      content,
    }
    updateNoteThunk({ id: note.id, note: updatedNote })
    this.setState({
      editCategory: false,
      editTitle: false,
    })
  }

  render() {
    const { note, showModalAndSetDeleteNoteIdThunk } = this.props
    const {
      editTitle,
      editCategory,
      open,
      title,
      content,
      category,
    } = this.state

    return (
      <Article>
        <NoteHeader
          setEditTitle={this.setEditTitle}
          editTitle={editTitle}
          onBlur={this.onBlur}
          onChange={this.onChange}
          timestamp={note.timestamp}
          category={category}
          descriptions={content.substr(0, 10)}
          toggle={this.toggle}
          open={open}
          title={title}
        />
        {open && (
          <Main>
            <Timestamp>{moment(note.timestamp).fromNow()}</Timestamp>
            <Category>
              {editCategory ? (
                <EditText
                  value={category}
                  name="category"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                />
              ) : (
                <span>
                  {category}
                  <EditButton onClick={this.setEditCategory} />
                </span>
              )}
            </Category>
            <Content
              name="content"
              value={content}
              onChange={this.onChange}
              onBlur={this.onBlur}
            />
            <DeleteNoteButton
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
    timestamp: PropTypes.string.isRequired,
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
