#!/usr/bin/env bash

# exit with nonzero exit code if anything fails
set -e

# Local variables
OUT=".gh-pages"
ID=$(git rev-parse --short HEAD)
DATE=$(date)

# remove all data in $OUT
#(cd $OUT; git rm -rf *)

# Copy all prebuild files
cp -rf slide/slide.html  $OUT/index.html
cp -rf slide/assets      $OUT
cp -rf slide/assets/vendors      $OUT/assets/vendors
cp -rf slide/assets/slide/target/js $OUT
cp -rf slide/assets/picts       $OUT

# go to the out directory and create a *new* Git repo
cd $OUT
find . -name .gitignore -exec rm -rf {} \;

# We permit following exit with error
set +e

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "deploy commit $ID to GitHub Pages: $DATE"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
set -e
git push --quiet origin gh-pages
