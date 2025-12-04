import { Hono } from 'hono';

const health = new Hono();

// Health check endpoint
health.get('/', (c) => {
  return c.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'hono-hello-world'
  });
});

export default health;
