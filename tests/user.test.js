const request = require('supertest');

let server;

describe('/users', () => {
    beforeEach(() => {
        server = require('../index');
    });
    afteEach(() => {
        server.close();
    });

    describe('GET /', () => {
        it('should return all users', async () => {
            const res = await request(server).get('/users');
            expect(res.status).toBe(200);
        });
    });
});