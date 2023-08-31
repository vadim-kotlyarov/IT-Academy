const { test, expect } = require('@playwright/test');
const validator = require('jsonschema');
const GET_popularJsonSchema = require('../../utils/model/jsonSchemas/GET_popularJsonSchema.json');

test.describe('Verify GET request to the popular products endpoint', () => {
  let response;
  let responseBody;
  test.beforeEach(async ({ request }) => {
    response = await request.get('https://gate.21vek.by/index/v1/popular', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  });

  test('Verify status code 200', async () => {
    await expect(response.status()).toBe(200);
  });

  test('Verify popular products array length is greater than 0', async () => {
    responseBody = JSON.parse(await response.text());
    await expect(responseBody.data.length).toBeGreaterThan(0);
  });

  test('Verify popular products response body should be with valid json schema', async () => {
    const result = await validator.validate(responseBody, GET_popularJsonSchema);
    await expect(result.valid).toEqual(true);
});

});
