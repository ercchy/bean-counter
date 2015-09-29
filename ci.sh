#!/bin/sh
#. build/scripts/run_jake.sh -f build/scripts/ci.jakefile.js $*
node_modules/.bin/jake -f build/scripts/ci.jakefile.js $*