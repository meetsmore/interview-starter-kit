# DevContainer Setup

## Introduction

This DevContainer provides a **ready-to-use development environment** for the MeetsMore interview exercise. It eliminates the "works on my machine" problem by giving you a pre-configured Ubuntu container with all the tools you need already installed.

**What you get:**
- ✅ No manual tool installation required
- ✅ Consistent environment across all candidates
- ✅ All dependencies pre-installed and tested
- ✅ Ready to start coding in minutes

This setup is commonly used in modern DevOps workflows to ensure reproducible development environments.

## Quick Start

### Prerequisites
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) and start it
2. Install [VS Code](https://code.visualstudio.com/)
3. Install [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Start the DevContainer

1. Open this project in VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Dev Containers: Reopen in Container" and press Enter
4. Wait 2-3 minutes for the container to build (first time only)

That's it! The container will automatically install all dependencies.

## Verify Everything Works

After the container starts, open a new terminal in VS Code and run:

```bash
# Start the app
cd app
pnpm install
pnpm dev
```

Open your browser to **http://localhost:3000** - you should see a congratulations page and the installed binaries versions.

## What's Included

**Runtime & Tools:**
- Node.js + TypeScript
- pnpm
- Docker (shared with host - no Docker-in-Docker overhead)
- kubectl
- Helm
- GitHub CLI
- AWS CLI

**Auto-configured:**
- Timezone: Asia/Tokyo
- Host network mode (easy localhost access)

**Note:** Docker uses your host's Docker daemon - images you build are visible on your host machine!


## Customization

Want to modify the devcontainer? Edit these files:

- **`.devcontainer/devcontainer.json`** - Change Node.js version, add VS Code extensions, mount additional folders
- **`.devcontainer/Dockerfile`** - Install additional system packages or tools
- **`.devcontainer/init.sh`** - Add one-time setup commands (runs after container creation)
- **`.devcontainer/start.sh`** - Add startup commands (runs every time container starts)

## Tips

- 🐳 Docker images built in the container are visible on your host machine
- 🌐 The app on `localhost:3000` is accessible from both container and host
- 📦 Use `gh` CLI for GitHub operations: `gh pr create`, `gh workflow run`, etc.
- ☁️ AWS CLI is pre-installed - configure with `aws configure` or mount your `~/.aws` credentials
