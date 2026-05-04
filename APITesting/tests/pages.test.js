import { describe, expect, test } from 'vitest';
import { getJson } from './support/apiClient.js';

describe('Pages API', () => {
  test('GET /wp-json/wp/v2/pages?slug=about returns the About page', async () => {
    const { response, body } = await getJson('/wp-json/wp/v2/pages?slug=about&per_page=1');

    expect(response.status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);

    const page = body[0];

    expect(page.slug).toBe('about');
    expect(page.link).toContain('/about/');
    expect(page.title.rendered).toMatch(/about/i);
    expect(page.status).toBe('publish');
  });
});