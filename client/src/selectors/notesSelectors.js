import { createSelector } from 'reselect'

const getNoteFilter = state => state.noteFilter
const getNotes = state => state.notes

export const getFilteredNotes = createSelector(
  [getNoteFilter, getNotes],
  (noteFilter, notes) => {
    if (noteFilter !== '') {
      const filtered = {}
      for (const id in notes) {
        // find out if note matches filter
        if (notes[id].content.includes(noteFilter)) {
          filtered[id] = notes[id]
        }
      }
      return filtered
    }
    return getNotes
  }
)
