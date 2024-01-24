#!/bin/sh

# source .env
echo "****** start service: node $FLAGS --experimental-fetch ./dist/index.js *******"
exec phecda $FLAGS ./index.ts