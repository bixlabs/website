#!/usr/bin/env bash

repo_dest=$(readlink -f ../bix-deploy)
dest="${repo_dest}/web/"

current=$(pwd)

if [ ! -d "${repo_dest}" ]; then
    echo Please clone the deploy repository
    echo "  git clone https://git.heroku.com/bix-website.git ${repo_dest}"
    exit 1
fi

grunt build && \
  cd ${repo_dest} && \
  git pull heroku master && \
  cd ${current} && \
  cp -r dist/* ${dest} && \
  cd ${repo_dest} && \
  git add -A && \
  git commit -m "deploy $(date "+%Y%M%d%H%M")" && \
  git push heroku master
