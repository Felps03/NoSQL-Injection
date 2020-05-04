import request from 'supertest'

import app from './../../src/app'

describe('Health', () => {
  it('[SUCCESS]  Should health is OK', async () => {
    const response = await request(app).get('/health')
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({ message: 'Welcome to Sis Digital' })
  })
})
