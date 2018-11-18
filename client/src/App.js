import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addNoteThunk, loadSavedNotesThunk } from './actions/notesActions'
import { setNotesFilter, clearNotesFilter } from './actions/notesFilterActions'
import { getFilteredNotes } from './selectors/notesSelectors'

import NewNoteButton from './components/NewNoteButton'
import SearchField from './components/SearchField'
import NoteItem from './components/NoteItem'
import Normalizer from './components/Normalizer'
import Modal from './components/Modal'
import DeleteModal from './components/DeleteModal'

class App extends Component {
  constructor(props) {
    super(props)

    props.loadSavedNotesThunk()
    // props.addNoteThunk()
    // props.addNoteThunk()
    // props.addNoteThunk()
    // props.addNoteThunk()
  }

  onChange = event => {
    this.props.setNotesFilter({ filter: event.target.value })
  }

  renderNotes() {
    const { notes } = this.props

    const entries = Object.entries(notes)

    if (!entries.length) {
      return <div>No notes added yet</div>
    }

    return entries.reverse().map(([id, note]) => {
      return <NoteItem key={id} note={{ id, ...note }} />
    })
  }

  render() {
    const { addNoteThunk, modal, notesFilter } = this.props
    return (
      <div>
        <Normalizer />
        <NewNoteButton onClick={addNoteThunk} />
        <SearchField onChange={this.onChange} value={notesFilter} />
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
  loadSavedNotesThunk: PropTypes.func.isRequired,
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
  notesFilter: PropTypes.string.isRequired,
  setNotesFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  modal: state.modal,
  notes: getFilteredNotes(state),
  notesFilter: state.notesFilter,
})

const mapDispatchToProps = {
  addNoteThunk,
  loadSavedNotesThunk,
  setNotesFilter,
  clearNotesFilter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
