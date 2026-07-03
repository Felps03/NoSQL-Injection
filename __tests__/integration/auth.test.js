import request from 'supertest';

import app from '../../src/app.js';
import { connectTestDatabase, clearTestDatabase, closeTestDatabase } from '../support/database.js';

const testUser = { email: 'teste@example.com', password: '123456' };

beforeAll(async () => {
  await connectTestDatabase();
});

beforeEach(async () => {
  await request(app).post('/users').send(testUser);
});

afterEach(async () => {
  await clearTestDatabase();
});

afterAll(async () => {
  await closeTestDatabase();
});

describe('Vulnerable login', () => {
  it('[SUCCESS] should authenticate with the correct password', async () => {
    const response = await request(app).post('/auth/vulnerable/login').send(testUser);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ email: testUser.email });
  });

  // Intentional: this route is vulnerable to NoSQL Injection by design.
  // Sending a Mongo operator instead of a real password still authenticates.
  it('[VULNERABILITY] should authenticate with a NoSQL Injection payload instead of the real password', async () => {
    const response = await request(app)
      .post('/auth/vulnerable/login')
      .send({ email: testUser.email, password: { $gt: '' } });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ email: testUser.email });
  });
});

describe('Safe login', () => {
  it('[SUCCESS] should authenticate with the correct password', async () => {
    const response = await request(app).post('/auth/safe/login').send(testUser);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ email: testUser.email });
  });

  it('[BLOCKED] should reject a NoSQL Injection payload', async () => {
    const response = await request(app)
      .post('/auth/safe/login')
      .send({ email: testUser.email, password: { $gt: '' } });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid request payload');
    expect(response.body.details).toEqual(
      expect.arrayContaining([expect.objectContaining({ path: ['password'] })])
    );
  });

  it('[BLOCKED] should reject an empty payload', async () => {
    const response = await request(app).post('/auth/safe/login').send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid request payload');
  });

  it('[BLOCKED] should reject an invalid email with an empty password', async () => {
    const response = await request(app)
      .post('/auth/safe/login')
      .send({ email: 'invalid-email', password: '' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid request payload');
  });
});
