#! /bin/bash

nohup node ./dist/server.js &

pm2 restart ecosystem.config.js --env production
