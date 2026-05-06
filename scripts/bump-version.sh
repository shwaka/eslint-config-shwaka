#!/usr/bin/env bash
set -euo pipefail

PACKAGE_JSON="$(dirname "$0")/../package.json"

if [[ ! -f "$PACKAGE_JSON" ]]; then
  echo "Error: package.json not found" >&2
  exit 1
fi

current_version="$(sed -n 's/^[[:space:]]*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$PACKAGE_JSON")"

if [[ -z "$current_version" ]]; then
  echo "Error: version field not found" >&2
  exit 1
fi

echo "Current version: $current_version"

printf "New version: "
read -r version

if [[ -z "$version" ]]; then
  echo "Error: version must not be empty" >&2
  exit 1
fi

if [[ ! "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$ ]]; then
  echo "Error: invalid version: $version" >&2
  exit 1
fi

sed -i.bak \
  "s/^\([[:space:]]*\"version\"[[:space:]]*:[[:space:]]*\"\)[^\"]*\(\".*\)$/\1${version}\2/" \
  "$PACKAGE_JSON"

rm -f "$PACKAGE_JSON.bak"

git add "$PACKAGE_JSON"
git commit -m "chore: bump version to $version"
git tag "v$version"
