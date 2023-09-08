import axios from 'axios'
import express from 'express'
// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest'

const app = express()

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('POST /api/games', () => {
  test('should successfully make a request and return response', async () => {
    const mockAuthResponse = {
      data: { access_token: 'mock_token' }
    }
    const mockDataAPIResponse = {
      data: { message: 'test message' }
    }
    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve(mockAuthResponse)
    )
    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve(mockDataAPIResponse)
    )
    const body = {
      accessTokenURL: 'https://test.com/token',
      dataAPIURL: 'https://test.com/data',
      dataFields: ['field1', 'field2'],
      authHeaders: { 'Content-Type': 'application/json' }
    }
    const mockReq: any = { body }
    const mockRes: any = {}
    mockRes.status = jest.fn().mockReturnValue(mockRes)
    mockRes.json = jest.fn().mockReturnValue(mockRes)
    mockRes.send = jest.fn().mockReturnValue(mockRes)
    await request(app).post('/api/games').send(mockReq).send(mockRes)
    expect(axios.post).toHaveBeenCalledWith('https://test.com/token')
    expect(axios.post).toHaveBeenCalledWith(
      'https://test.com/data',
      { fields: ['field1', 'field2'] },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer mock_token'
        }
      }
    )
    expect(mockRes.send).toHaveBeenCalledWith({ message: 'test message' })
  })

  test('should catch and handle errors', async () => {
    mockedAxios.post.mockImplementation(() =>
      Promise.reject(new Error('mock error'))
    )
    const body = {
      accessTokenURL: 'https://test.com/token',
      dataAPIURL: 'https://test.com/data',
      dataFields: ['field1', 'field2'],
      authHeaders: { 'Content-Type': 'application/json' }
    }
    const mockReq: any = { body }
    const mockRes: any = {}
    mockRes.status = jest.fn().mockReturnValue(mockRes)
    mockRes.json = jest.fn().mockReturnValue(mockRes)
    mockRes.send = jest.fn().mockReturnValue(mockRes)
    await request(app).post('/api/games').send(mockReq).send(mockRes)
    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'mock error' })
  })
})
