const request = require('supertest');

import app from '../../src/server/server'

afterAll(() => {
    app.close();
})

describe('Basic Error Handling', () => {
    describe('404 Route', () => {
        it('responds with a 404 error and html', (done) => {
            request(app)
                .get('/nonsense')
                .expect('Content-Type', /text\/html/)
                .expect(404, done);
        });
    });
});


