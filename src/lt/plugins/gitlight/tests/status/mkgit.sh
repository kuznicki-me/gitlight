#!/bin/bash

TEST_DIR=$(mktemp -d --tmpdir=/tmp/ gitlight-testing-XXX)

cd $TEST_DIR
git init > /dev/null

for i in {1..5}
do
	# staged
	F=$(mktemp --tmpdir=. staged-XXX)
	git add $F

	# not-staged
	F=$(mktemp --tmpdir=. not-staged-XXX)
	git add $F

	# unstaged
	mktemp --tmpdir=. unstaged-XXX > /dev/null
done
git commit -m "test commit" > /dev/null

find $TEST_DIR -iname '*staged*' -exec sh -c 'echo "testing" >> "$1"' -- {} \;
find $TEST_DIR -iname 'staged*' -exec git add "{}" \;

echo -n $TEST_DIR
