import request from 'supertest'
import express from 'express'
import routes from '../../src/routes'

const app = express()
app.use(routes)

describe('Routes', () => {
  it('should respond with a message on the root route', async () => {
    const response = await request(app).get('/health')

    expect(response.status).toBe(200)
    expect(response.text).toBe('Server is running!')
  })
})
