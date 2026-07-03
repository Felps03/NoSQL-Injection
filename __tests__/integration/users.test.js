import request from 'supertest';

import app from '../../src/app.js';
import { connectTestDatabase, clearTestDatabase, closeTestDatabase } from '../support/database.js';

const testUser = { email: 'teste@example.com', password: '123456' };

beforeAll(async () => {
  await connectTestDatabase();
});

afterEach(async () => {
  await clearTestDatabase();
});

afterAll(async () => {
  await closeTestDatabase();
});

describe('Users', () => {
  it('[SUCCESS] should create a user', async () => {
    const response = await request(app).post('/users').send(testUser);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ email: testUser.email });
  });

  it('[SUCCESS] should list created users', async () => {
    await request(app).post('/users').send(testUser);

    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toMatchObject({ email: testUser.email });
  });
});
