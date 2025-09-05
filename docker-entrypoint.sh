#!/bin/sh
set -e

# Cria o arquivo auth.json a partir da env GOOGLE_AUTH_JSON
if [ -n "$GOOGLE_AUTH_JSON" ]; then
  echo "$GOOGLE_AUTH_JSON" > /tmp/auth.json
fi

exec "$@"
