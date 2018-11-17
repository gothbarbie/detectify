import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addNoteThunk } from './actions/notesActions'

import NewNoteButton from './components/NewNoteButton'
import SearchField from './components/SearchField'
import NoteItem from './components/NoteItem'
import Normalizer from './components/Normalizer'
import Modal from './components/Modal'
import DeleteModal from './components/DeleteModal'

class App extends Component {
  constructor(props) {
    super(props)

    props.addNoteThunk()
    props.addNoteThunk()
    props.addNoteThunk()
    props.addNoteThunk()
  }

  renderNotes() {
    const { notes } = this.props

    return Object.entries(notes)
      .reverse()
      .map(([id, note]) => {
        return <NoteItem key={id} note={{ id, ...note }} />
      })
  }

  render() {
    const { addNoteThunk, modal } = this.props
    return (
      <div>
        <Normalizer />
        <NewNoteButton onClick={addNoteThunk} />
        <SearchField />
        {this.renderNotes()}
        <Modal show={modal.show}>
          <DeleteModal />
        </Modal>
      </div>
    )
  }
}

App.propTypes = {
  addNoteThunk: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    show: PropTypes.bool.isRequired,
  }).isRequired,
  notes: PropTypes.shape({
    [PropTypes.string.isRequired]: {
      title: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    },
  }).isRequired,
}

const mapStateToProps = ({ notes, modal }) => ({
  notes,
  modal,
})

const mapDispatchToProps = {
  addNoteThunk,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
