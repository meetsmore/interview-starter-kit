import { Hono } from 'hono';
import { readFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const home = new Hono();

// Helper function to get binary version
function getBinaryVersion(command: string): string {
  try {
    return execSync(command, { encoding: 'utf-8' }).trim();
  } catch (error) {
    return 'Not available';
  }
}

// Root endpoint - Congratulations page
home.get('/', (c) => {
  // Read template on each request for hot reload during development
  const templatePath = join(__dirname, '../views/congratulations.html');
  const template = readFileSync(templatePath, 'utf-8');

  const kubectlVersion = getBinaryVersion('kubectl version --client --short 2>/dev/null || kubectl version --client 2>&1 | head -n 1');
  const helmVersion = getBinaryVersion('helm version --short 2>/dev/null || helm version 2>&1 | head -n 1');

  const html = template
    .replace('{{nodeVersion}}', process.version)
    .replace('{{platform}}', process.platform)
    .replace('{{arch}}', process.arch)
    .replace('{{port}}', process.env.PORT || '3000')
    .replace('{{kubectlVersion}}', kubectlVersion)
    .replace('{{helmVersion}}', helmVersion);

  return c.html(html);
});

export default home;
