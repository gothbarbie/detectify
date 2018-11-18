import PretendAPI from '../PretendAPI'

let API
let id

describe('Utils/PretendAPI', () => {
  beforeEach(() => {
    API = new PretendAPI()
    id = '4653eade-15ed-419a-b57f-6f169f97a687'
  })

  it('stores data', () => {
    const data = {
      timestamp:
        'Sun Nov 18 2018 11:43:07 GMT+0100 (centraleuropeisk normaltid)',
      title: 'New Note',
      category: 'Category',
      description: '',
      content: '',
    }
    const result = API.post({ id, data })
    const expectedResult = {
      body: id,
      status: 200,
    }
    expect(result).toEqual(expectedResult)
  })

  it('retrieves data', () => {
    const result = API.get(id)
    const expectedResult = {
      body: {
        category: 'Category',
        content: '',
        description: '',
        timestamp:
          'Sun Nov 18 2018 11:43:07 GMT+0100 (centraleuropeisk normaltid)',
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
