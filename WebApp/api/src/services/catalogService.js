import { config } from "../config.js";

async function requestContent(pathname) {
  const targetUrl = `${config.pythonBackendUrl}${pathname}`;
  const response = await fetch(targetUrl);

  if (!response.ok) {
    throw new Error(`Content service request failed (${response.status})`);
  }

  return response.json();
}

export async function fetchStoreInfo() {
  return requestContent("/content/store-info");
}

export async function fetchProducts() {
  return requestContent("/content/products");
}
