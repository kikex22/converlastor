#!/usr/bin/env sh

# Abort on errors
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Initialize git (if not already done)
git init
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch of your GitHub repository
git push -f git@github.com:kikex22/converlastor.git master:gh-pages

# Navigate back
cd -
