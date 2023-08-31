const { test, expect } = require('@playwright/test');
const validator = require('jsonschema');
const POST_productJsonSchema = require('../../utils/model/jsonSchemas/POST_productJsonSchema.json');

test.describe('Verify POST request to the product details endpoint', () => {
  let response;
  let responseBody;
  test.beforeEach(async ({ request }) => {
    response = await request.post('https://gate.21vek.by/delivery/product', {
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      data: {
        data: {
          type: 'DeliveryProduct',
          attributes: {
            city_id: 2458,
            product: {
              code: 395851,
              count: 1,
              price: 1.63,
            },
          },
        },
      },
    });
  });

  test('Verify status code 200', async () => {
    await expect(response.status()).toBe(200);
  });

  test('Verify product details response has the same id', async () => {
    responseBody = JSON.parse(await response.text());
    await expect(responseBody.data.id).toBe(395851);
  });

  test('Verify product response body should be with valid json schema', async () => {
    const result = await validator.validate(responseBody, POST_productJsonSchema);
    await expect(result.valid).toEqual(true);
  });

});
