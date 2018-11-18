import uuid from 'uuid/v4'

export default class PretendAPI {
  get(id) {
    const item = window.localStorage.getItem(id)
    if (item) {
      return { status: 200, body: JSON.parse(item) }
    } else {
      return { status: 404 }
    }
  }

  post({ id = uuid(), data }) {
    window.localStorage.setItem(id, JSON.stringify(data))
    return { status: 200, body: id }
  }

  delete(id) {
    if (this.get(id)) {
      window.localStorage.removeItem(id)
      return { status: 200, body: id }
    }
    return { status: 404 }
  }
}
