#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

if you are deploying to https://fernandalizs.github.io/gameoflife
git push -f git@github.com:fernandalizs/gameoflife.git main:gh-pages

cd -