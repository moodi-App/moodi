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
        it('logs a server-side error', (done) => {
            const log = jest.spyOn(console, 'log');
            expect(log.mock.calls.length).toBe(0);
            request(app)
                .get('/broken');
            expect(log.mock.calls.length).toBe(1);
            jest.clearAllMocks();
            return done();
        })
    })
});




