#!/bin/bash

if test -z "${DEPLOY_BLOB_KEY}" -o -z "${DEPLOY_BLOB_URI}"; then
  echo "No deployment configured."
  exit 0;
fi

# Download / decrypt / extract
curl "${DEPLOY_BLOB_URI}" |
openssl enc -d \
  -aes-256-cbc -salt \
  -k "${DEPLOY_BLOB_KEY}" | \
tar -xj

bash deploy/start.sh

rm -rf deploy
  
