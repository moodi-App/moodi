/**
 * @jest-environment node
 */
const request = require('supertest');

import app from '../../src/server/server'

afterAll(() => {
  app.close();
});

describe('Basic Error Handling', () => {
  describe('404 Route', () => {
    it('responds with a 404 error and html', (done) => {
      request(app)
        .get('/nonsense')
        .expect('Content-Type', /text\/html/)
        .expect(404, done);
    });
  });
  describe('Global Error Handler', () => {
    it('responds with 500 to errors within the server', (done) => {
      request(app)
        .get('/broken')
        .expect('Content-Type', /json/)
        .expect(500, done);
    });
    it('logs a server-side error', async () => {
      const log = jest.spyOn(console, 'log');
      expect(log.mock.calls.length).toBe(0);
      await request(app)
        .get('/broken');
      expect(log.mock.calls.length).toBe(1);
      jest.clearAllMocks();
    })
  })
});

describe('followController', () => {
  describe('get followed by userId', () => {
    it('should return list of accounts', async () => {
      const resp = await request(app)
        .get('/api/follows/1')
        .set('Accept', 'application/json')
      expect(Array.isArray(resp.body)).toBe(true);
    });
    it('repeated calls should not edit database', async () => {
      const resp1 = await request(app)
        .get('/api/follows/1')
        .set('Accept', 'application/json')
      const resp2 = await request(app)
        .get('/api/follows/1')
        .set('Accept', 'application/json')
      expect(resp1.body.length).toEqual(resp2.body.length);
    })
  })
  describe('add follower', () => {
    it('should return the posted follower', () => {
    })
    it('follow should appear in table', () => {
    })
    it('adding followers without a matching user or target should return an error', () => {
    })
  })
  describe('unfollow', () => {
    it('follow should be removed', () => {
    })
    it('follow should not delete if follow does not exist', () => {
    })
    it('sequential unfollows should not impact table', () => {
    });
  });
});
