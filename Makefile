
test:
	@./node_modules/.bin/mocha \
		--harmony \
		--reporter dot \
		--bail

.PHONY: test