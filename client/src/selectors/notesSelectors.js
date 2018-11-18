import { createSelector } from 'reselect'

const getNoteFilter = state => state.notesFilter
const getNotes = state => state.notes

export const getFilteredNotes = createSelector(
  [getNoteFilter, getNotes],
  (notesFilter, notes) => {
    if (notesFilter !== '') {
      const filtered = {}
      for (const id in notes) {
        // find out if note matches filter
        if (notes[id].content.includes(notesFilter)) {
          filtered[id] = notes[id]
        }
      }
      return filtered
    }
    return notes
  }
)
