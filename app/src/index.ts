import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import home from './routes/home';
import health from './routes/health';
import metrics from './routes/metrics';

const app = new Hono();

// Mount routes
app.route('/', home);
app.route('/health', health);
app.route('/metrics', metrics);

const port = parseInt(process.env.PORT || '3000');

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
