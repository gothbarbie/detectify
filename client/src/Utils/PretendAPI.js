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

  post(url, { id, data } = { id: uuid() }) {
    const note = this._createNote()

    switch (url) {
      case '/note':
        window.localStorage.setItem(id, JSON.stringify(note))
        return {
          status: 200,
          body: { id, data },
        }

      case '/note/new':
        window.localStorage.setItem(id, JSON.stringify(data))
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
