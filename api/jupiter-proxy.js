export default async function handler(req, res) {
  const jupiterUrl = 'https://quote-api.jup.ag/v6' + req.url.replace('/api/jupiter-proxy', '');
  
  const response = await fetch(jupiterUrl, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });
  
  const data = await response.json();
  res.status(response.status).json(data);
}
