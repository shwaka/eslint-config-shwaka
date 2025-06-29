#!/usr/bin/env bash
set -eu

cd "$(dirname "$0")"
# SCRIPTS_DIR=$(pwd)

cd "$(git rev-parse --show-toplevel)" # go to the root of the repository
ROOT_DIR=$(pwd)

TEST_DIR="$ROOT_DIR/test-projects"
TARGETS=$(ls "$TEST_DIR")

for target in $TARGETS; do
    echo
    echo -e "\e[32m--- $target\e[m"
    cd "$TEST_DIR/$target"
    echo "npm ci > /dev/null"
    npm ci > /dev/null
    echo "npm run eslint"
    npm run eslint
done
