import PretendAPI from '../PretendAPI'

let API
let id

describe('Utils/PretendAPI', () => {
  const RealDate = Date

  function mockDate(isoDate) {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(isoDate)
      }
    }
  }

  afterEach(() => {
    global.Date = RealDate
    jest.resetAllMocks()
  })

  beforeEach(() => {
    API = new PretendAPI()
    id = '4653eade-15ed-419a-b57f-6f169f97a687'
    mockDate('2017-11-25T12:34:56z')
  })

  it('/note - stores data', () => {
    const data = {
      timestamp: '2017-11-25T12:34:56z',
      title: 'New Note',
      category: 'Category',
      content: '',
    }
    const result = API.post('/note', id, data)
    const expectedResult = {
      body: {
        data: {
          category: 'Category',
          content: '',
          timestamp: '2017-11-25T12:34:56z',
          title: 'New Note',
        },
        id,
      },
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })

  it('/note/new - returns new note', () => {
    const result = API.post('/note/new', id)
    const expectedResult = {
      body: {
        data: {
          category: 'Category',
          content: '',
          timestamp: '2017-11-25T12:34:56.000Z',
          title: 'New Note',
        },
        id: '4653eade-15ed-419a-b57f-6f169f97a687',
      },
      status: 200,
    }

    expect(result).toEqual(expectedResult)
  })

  it('/note/all - retrieve all notes', () => {
    const result = API.get('/note/all')
    const expectedResult = {
      body: {},
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })

  // TODO: Figure out how mocked localstore works
  // So several steps can be tested after each other
  xit('deletes data', () => {
    const newNote = API.post('/note/new', id)
    const result = API.delete('/note/delete', id)
    const expectedResult = {
      body: '4653eade-15ed-419a-b57f-6f169f97a687',
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })
})
