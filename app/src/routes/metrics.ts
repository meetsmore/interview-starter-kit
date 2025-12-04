import { Hono } from 'hono';

const metrics = new Hono();

// Metrics endpoint (for Prometheus scraping)
metrics.get('/', (c) => {
  // Basic metrics - in production, you'd use a proper metrics library
  return c.text(`# HELP app_info Application information
# TYPE app_info gauge
app_info{version="1.0.0",service="hono-hello-world"} 1
`);
});

export default metrics;
