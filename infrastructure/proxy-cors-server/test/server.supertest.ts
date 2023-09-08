// import request from 'supertest'
// import app from './app'

// jest.mock('axios')
// describe('POST /api/games', () => {
//   test('should successfully make a request and return response', async () => {
//     const mockAuthResponse = {
//       data: { access_token: 'mock_token' }
//     }
//     const mockDataAPIResponse = {
//       data: { message: 'test message' }
//     }
//     axios.post.mockImplementationOnce(() => Promise.resolve(mockAuthResponse))
//     axios.post.mockImplementationOnce(() =>
//       Promise.resolve(mockDataAPIResponse)
//     )
//     const body = {
//       accessTokenURL: 'https://test.com/token',
//       dataAPIURL: 'https://test.com/data',
//       dataFields: ['field1', 'field2'],
//       authHeaders: { 'Content-Type': 'application/json' }
//     }
//     const response = await request(app)
//       .post('/api/games')
//       .send(body)
//       .set('Accept', 'application/json')
//     expect(axios.post).toHaveBeenCalledWith('https://test.com/token')
//     expect(axios.post).toHaveBeenCalledWith(
//       'https://test.com/data',
//       { fields: ['field1', 'field2'] },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer mock_token'
//         }
//       }
//     )
//     expect(response.status).toEqual(200)
//     expect(response.body).toEqual(mockDataAPIResponse.data)
//   })

//   test('should catch and handle errors', async () => {
//     axios.post.mockImplementation(() => Promise.reject(new Error('mock error')))
//     const body = {
//       accessTokenURL: 'https://test.com/token',
//       dataAPIURL: 'https://test.com/data',
//       dataFields: ['field1', 'field2'],
//       authHeaders: { 'Content-Type': 'application/json' }
//     }
//     const response = await request(app)
//       .post('/api/games')
//       .send(body)
//       .set('Accept', 'application/json')
//     expect(response.status).toEqual(400)
//     expect(response.body).toEqual({ message: 'mock error' })
//   })
// })
