import uuid from 'uuid/v4'

export default class PretendAPI {
  _createNote() {
    const date = new Date()
    return {
      timestamp: date.toISOString(),
      title: 'New Note',
      category: 'Category',
      description: '',
      content: '',
    }
  }

  get(id) {
    const item = window.localStorage.getItem(id)
    if (item) {
      return { status: 200, body: JSON.parse(item) }
    } else {
      return { status: 404 }
    }
  }

  getAll() {
    const notes = {}

    for (const key in window.localStorage) {
      const item = window.localStorage.getItem(key)
      try {
        const note = JSON.parse(item)
        if (note && typeof note === 'object') {
          notes[key] = note
        }
      } catch (ex) {
        // We can ignore anything that isn't JSON compatible
      }
    }
    return { status: 200, body: notes }
    // remove empty items from non-parsable items
    // return notes.filter(el => el !== null)
  }

  post(url, { id, data } = { id: uuid() }) {
    const note = this._createNote()

    switch (url) {
      case '/note':
        window.localStorage.setItem(id, JSON.stringify(data))
        return {
          status: 200,
          body: { id, data },
        }

      case '/note/new':
        window.localStorage.setItem(id, JSON.stringify(note))
        return {
          status: 200,
          body: { id, data: note },
        }

      default:
        break
    }
  }

  delete(id) {
    if (this.get(id)) {
      window.localStorage.removeItem(id)
      return { status: 200, body: id }
    }
    return { status: 404 }
  }
}
