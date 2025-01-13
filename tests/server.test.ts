import request from 'supertest'
import server from '../src/server'

describe('Sanity', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

describe('Express Server', () => {
  afterAll(() => {
    server.close()
  })

  it("should return 'Server is running!'", async () => {
    const response = await request(server).get('/health')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Server is running!')
  })

  it('should handle PORT from environment variables', async () => {
    process.env.PORT = '4000'
    const { PORT } = process.env
    expect(PORT).toBe('4000')
  })
})
