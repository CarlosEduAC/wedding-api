import request from 'supertest'
import app from '../src/app'

describe('Express App', () => {
  it('should have CORS enabled', async () => {
    const response = await request(app).get('/')
    expect(response.headers['access-control-allow-origin']).toBe('*')
  })
})
