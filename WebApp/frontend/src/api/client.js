async function request(pathname, options = {}) {
  const response = await fetch(pathname, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json();
}

export function getStoreInfo() {
  return request("/api/store-info");
}

export function getProducts() {
  return request("/api/products");
}

export function sendContactMessage(payload) {
  return request("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
