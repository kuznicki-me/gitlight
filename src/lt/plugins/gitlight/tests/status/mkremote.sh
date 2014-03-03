#!/bin/bash
REPO=$(./mkgit.sh)

TEST_DIR=$(mktemp -d --tmpdir=/tmp/ gitlight-testing-XXX)
cd $TEST_DIR
git clone $REPO >/dev/null 2>&1

cd $REPO
touch pull_me
git add pull_me >/dev/null
git commit -m "pull test" >/dev/null
git checkout -b testing >/dev/null 2>&1


cd $TEST_DIR
cd gitlight-testing*
touch push_me
pwd
