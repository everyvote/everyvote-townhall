#!/bin/bash

if test -z "${DEPLOY_BLOB}"; then
  echo "No deployment configured."
  exit 0;
fi

echo "${DEPLOY_BLOB}" | openssl enc -d -base64 | tar -xj
bash deploy/start.sh


  
