import React, { Component } from 'react'

import NewNoteButton from './components/NewNoteButton'
import SearchField from './components/SearchField'
import NoteItem from './components/NoteItem'
import Normalizer from './components/Normalizer'

class App extends Component {
  render() {
    return (
      <div>
        <Normalizer />
        <NewNoteButton />
        <SearchField />
        <NoteItem />
      </div>
    )
  }
}

export default App
