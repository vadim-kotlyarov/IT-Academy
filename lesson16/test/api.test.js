const axios = require('axios');
const validator = require('jsonschema');
const getBooksSchema = require('../data/fakeAPIBooks.post.v1.json');
const getNewBooksSchema = require('../data/fakeAPIBooks.post.v2.json');

describe('API tests GET', function () {
    let response;
    beforeAll(async () => {
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            headers: {
                Accept: 'application/json'
            }
        });
    })
    test('GET request should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('GET should be valid json schema', async () => {
        const result = await validator.validate(response.data, getBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests POST', function () {
    let response;
    beforeAll(async () => {
        response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            headers: {
                Accept: 'application/json'
            },
            data: {
                "id": 10,
                "title": "my book",
                "description": "my description",
                "pageCount": 100,
                "excerpt": "nothing",
                "publishDate": "2023-07-16T21:22:24.330Z"
            }
        });
    })
    test('POST request should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('POST should be valid json schema', async () => {
        const result = await validator.validate(response.data, getNewBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests GET2', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`, {
            headers: {
                Accept: 'application/json'
            }
        });
    })
    test('GET2 request should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('GET2 should be valid json schema', async () => {
        const result = await validator.validate(response.data, getNewBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests PUT', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        response = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`, {
            headers: {
                Accept: 'application/json'
            },
            data: {
                "id": 0,
                "title": "string",
                "description": "string",
                "pageCount": 0,
                "excerpt": "string",
                "publishDate": "2023-07-16T21:51:08.158Z"
            }
        });
    })
    test('PUT request should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('PUT should be valid json schema', async () => {
        const result = await validator.validate(response, getNewBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests DELETE', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            headers: {
                Accept: 'application/json'
            },
            data: {
                "id": 12,
                "title": "my book",
                "description": "my description",
                "pageCount": 100,
                "excerpt": "nothing",
                "publishDate": "2023-07-16T21:22:24.330Z"
            }
        });
        response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`, {
            headers: {
                Accept: 'application/json'
            }
        });
    })
    test('DELETE request should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
});