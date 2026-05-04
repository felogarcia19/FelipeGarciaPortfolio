import { describe, expect, test } from 'vitest';
import { apiBaseUrl, getJson } from './support/apiClient.js';

describe('REST API index', () => {
  test('GET /wp-json/ returns WordPress API metadata', async () => {
    const { response, body } = await getJson('/wp-json/');

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
    expect(body).toMatchObject({
      name: expect.any(String),
      url: expect.stringContaining(apiBaseUrl),
      namespaces: expect.arrayContaining(['wp/v2']),
    });
    expect(body.routes).toHaveProperty('/wp/v2/pages');
  });
});