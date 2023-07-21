const axios = require('axios');
const validator = require('jsonschema');
const getBooksSchema = require('../data/fakeAPIBooks.post.v1.json');
const getNewBooksSchema = require('../data/fakeAPIBooks.post.v2.json');

describe('API tests GET list of books', function () {
    let response;
    beforeAll(async () => {
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
    });
    test('GET list of books status code should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('GET list of books response body should be with valid json schema', async () => {
        const result = await validator.validate(response.data, getBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests POST create book', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            "id": id,
            "title": "my page",
            "description": "my description",
            "pageCount": 150,
            "excerpt": "nothing",
            "publishDate": "2023-07-16T21:22:24.330Z"

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });
    afterAll(async () => {
        await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
    });
    test('POST create book status code should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('POST create book response body should be with valid json schema', async () => {
        const result = await validator.validate(response.data, getNewBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests GET book by id', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
    })
    test('GET book by id status code should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('GET book by id response body should be with valid json schema', async () => {
        const result = await validator.validate(response.data, getNewBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests PUT update book', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            "id": id,
            "title": "my page",
            "description": "my description",
            "pageCount": 150,
            "excerpt": "nothing",
            "publishDate": "2023-07-16T21:22:24.330Z"

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`, {
            "id": id,
            "title": "my book",
            "description": "my description",
            "pageCount": 100,
            "excerpt": "nothing",
            "publishDate": "2023-07-16T21:22:24.330Z"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });
    afterAll(async () => {
        await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
    });
    test('PUT update book status code should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
    test('PUT update book response body should be wiht valid json schema', async () => {
        const result = await validator.validate(response.data, getNewBooksSchema);
        await expect(result.valid).toEqual(true);
    });
});

describe('API tests DELETE book by id', function () {
    let response;
    let id = 12;
    beforeAll(async () => {
        await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            "id": 12,
            "title": "my book",
            "description": "my description",
            "pageCount": 100,
            "excerpt": "nothing",
            "publishDate": "2023-07-16T21:22:24.330Z"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
    });
    test('DELETE book by id status code should be 200', async () => {
        await expect(response.status).toEqual(200);
    });
});
