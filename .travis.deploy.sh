#!/bin/bash

if test -z "${DEPLOY_BLOB_KEY}" -o -z "${DEPLOY_BLOB_URI}"; then
  echo "No deployment configured."
  exit 0;
fi

curl -silent "${DEPLOY_BLOB_URI}" | \
openssl enc -d \
  -aes-256-cbc -salt \
  -in "DEPLOY_BLOB" \
  -k ${DEPLOY_BLOB_KEY} | \
tar -xj
  
bash deploy/start.sh

rm -rf deploy
  
