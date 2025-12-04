#!/bin/bash

# setup pnpm
SHELL=bash pnpm setup

# Setup starship.rs
curl -sS https://starship.rs/install.sh | sh -s -- --yes > /dev/null 2>&1
echo 'eval "$(starship init bash)"' >> ~/.bashrc