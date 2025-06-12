const API_BASE = 'http://localhost:8080/api/clients';

export async function createClient(client) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(client),
  });
  return await res.json();
}
