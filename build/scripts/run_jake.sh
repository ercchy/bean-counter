#!/usr/bin/env bash
# Runs Jake from node_modules directory, preventing it from needing to be installed globally
# Also ensures node modules have been built

[ ! -f node_modules/.bin/jake ] && echo "Building npm modules:" && npm rebuild
node_modules/.bin/jake -f build/scripts/build.jakefile.js $*