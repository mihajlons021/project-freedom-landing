export default async function handler(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname.replace('/api/jupiter-proxy', '');
  const query = url.search;
  const jupiterUrl = `https://quote-api.jup.ag/v6${path}${query}`;

  const response = await fetch(jupiterUrl, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
