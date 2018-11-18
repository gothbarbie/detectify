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
  })

  beforeEach(() => {
    API = new PretendAPI()
    id = '4653eade-15ed-419a-b57f-6f169f97a687'
  })

  it('/note - stores data', () => {
    const data = {
      timestamp: mockDate('2017-11-25T12:34:56z'),
      title: 'New Note',
      category: 'Category',
      description: '',
      content: '',
    }
    const result = API.post('/note', { id, data })
    const expectedResult = {
      body: {
        data: {
          category: 'Category',
          content: '',
          description: '',
          timestamp: mockDate('2017-11-25T12:34:56z'),
          title: 'New Note',
        },
        id: '4653eade-15ed-419a-b57f-6f169f97a687',
      },
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })

  it('/note/new - returns new note', () => {
    const result = API.post('/note/new')

    expect(result).toEqual({
      body: {
        data: {
          category: 'Category',
          content: '',
          description: '',
          timestamp: expect.anything(),
          title: 'New Note',
        },
        id: expect.anything(),
      },
      status: 200,
    })
  })

  it('retrieves data', () => {
    const result = API.get(id)
    const expectedResult = {
      body: {
        category: 'Category',
        content: '',
        description: '',
        timestamp: '2017-11-25T12:34:56.000Z',
        title: 'New Note',
      },
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })

  it('deletes data', () => {
    const result = API.delete(id)
    const expectedResult = {
      body: '4653eade-15ed-419a-b57f-6f169f97a687',
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })
})
