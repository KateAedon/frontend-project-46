install: deps-install
	npx simple-git-hooks

run:
	bin/nodejs-package.js

deps-install:
	npm ci --legacy-peer-deps

deps-update:
	npx ncu -u

test:
	npm test

lint:
	npx eslint .

.PHONY: test