FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# Set environment variables
ENV NODE_ENV=development

# Install additional OS packages
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update -yqq > /dev/null \
    && apt-get upgrade -yqq > /dev/null \
    && apt-get -yqq install --no-install-recommends \
    build-essential \
    vim \
    curl \
    ca-certificates \
    apt-transport-https > /dev/null \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*