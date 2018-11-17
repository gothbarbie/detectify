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
        <NoteItem
          note={{
            id: 'n01',
            title: 'Title',
            description: 'Description',
            category: 'News',
            content: 'Content',
            datestamp: '2018-01-01',
          }}
        />
        <NoteItem
          note={{
            id: 'n01',
            title: 'Title',
            description: 'Description',
            category: 'News',
            content: 'Content',
            datestamp: '2018-01-01',
          }}
        />
        <NoteItem
          note={{
            id: 'n01',
            title: 'Title',
            description: 'Description',
            category: 'News',
            content: 'Content',
            datestamp: '2018-01-01',
          }}
        />
        <NoteItem
          note={{
            id: 'n01',
            title: 'Title',
            description: 'Description',
            category: 'News',
            content: 'Content',
            datestamp: '2018-01-01',
          }}
        />
      </div>
    )
  }
}

export default App
