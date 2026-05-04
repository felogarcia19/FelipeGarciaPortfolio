import dotenv from 'dotenv';

dotenv.config();

export const apiBaseUrl = process.env.API_BASE_URL ?? 'https://preludeelectronics.com';

export async function getJson(pathname) {
  const url = new URL(pathname, apiBaseUrl);
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
    },
  });

  const contentType = response.headers.get('content-type') ?? '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  return { url, response, body };
}