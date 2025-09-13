#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: ./deploy.sh <YOUR_USERNAME> <YOUR_REPO>"
  exit 1
fi

USER="$1"
REPO="$2"

git init
git branch -M main || true
git add .
git commit -m "Initial commit for Dee’s Online Shopping Mall" || true
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${USER}/${REPO}.git"
git push -u origin main
echo "Pushed to https://github.com/${USER}/${REPO}"
echo "Now enable GitHub Pages: Settings → Pages → Source: GitHub Actions."
