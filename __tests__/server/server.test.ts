/**
 * @jest-environment node
 */
const request = require('supertest');

import app from '../../src/server/server'
import { query } from '../../src/server/model'

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
        .get('/api/follows?username=Mooder')
        .set('Accept', 'application/json')
      expect(Array.isArray(resp.body)).toBe(true);
    });
    it('repeated calls should not edit database', async () => {
      const resp1 = await request(app)
        .get('/api/follows?username=Mooder')
        .set('Accept', 'application/json')
      const resp2 = await request(app)
        .get('/api/follows?username=Mooder')
        .set('Accept', 'application/json')
      expect(resp1.body.length).toEqual(resp2.body.length);
    })
  })
  describe('add follower', () => {
    beforeAll(async () => {
      const createString = `
        INSERT INTO public.accounts (username, email, password) VALUES ($1, 'testemail', 'password');
      `;
      await query(createString,['test1'], () => { });
      await query(createString,['test2'], () => { });
    });
    afterEach(async () => {
      const cleanUpString = `
        DELETE FROM public.follows WHERE follower_id = (SELECT id FROM public.accounts WHERE username = $1)
      `;
      await query(cleanUpString, ['test1']);
    });
    afterAll(async () => {
      const cleanUpString = `
        DELETE FROM public.accounts WHERE username='test1' OR username='test2';
      `;
      await query(cleanUpString, []);
    });

    it('should return 201', async () => {
      await request(app)
        .post('/api/follows')
        .send({ follower: 'test1', target: 'test2' })
        .set('Accept', 'application/json')
        .expect(201);
    })
    it('follow should appear in table', async () => {
      const queryString = `
       SELECT * FROM public.follows WHERE follower_id = (SELECT id FROM public.accounts WHERE username = $1)
      `;
      await request(app)
        .post('/api/follows')
        .send({ follower: 'test1', target: 'test2' })
        .set('Accept', 'application/json')
      await query(queryString, ['test1'], (err, response) => {
        expect(response?.rows[0]).toBeDefined();
      })
    })
    it('adding followers without a matching user should return an error and not update', async () => {
      await request(app)
        .post('/api/follows')
        .send({ follower: 'test3', target: 'test2' })
        .set('Accept', 'application/json')
        .expect(400);
      const queryString = `
        SELECT * FROM public.follows WHERE follower_id = (SELECT id FROM public.accounts WHERE username = $1)
      `;
      await query(queryString, ['test3'], (err, response) => {
        expect(response?.rows.length).toBe(0);
      })
    })
    it('adding followers without a matching target should return an error and not update', async () => {
      await request(app)
        .post('/api/follows')
        .send({ follower: 'test1', target: 'test3' })
        .set('Accept', 'application/json')
        .expect(400);
      const queryString = `
        SELECT * FROM public.follows WHERE follower_id = (SELECT id FROM public.accounts WHERE username = $1)
      `;
      await query(queryString, ['test1'], (err, response) => {
        expect(response.rows.length).toBe(0);
      })
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
