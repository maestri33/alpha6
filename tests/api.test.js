// Testes para Alpha6
const request = require('supertest');
const app = require('../src/index.js');

describe('API Tests', () => {
  test('GET / deve retornar mensagem', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBeDefined();
  });

  test('GET /health deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
