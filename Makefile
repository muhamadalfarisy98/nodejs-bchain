run :
	node index.js
version:
	npm -v 
	node -v
# untuk buat package.jsonnya
init:
	npm init -y
nodemon:
	npm i nodemon --save-dev
test :
	node dev-test.js

# run main test program
# realtime - changes
# running yg di key scriptsn
runtest:
	npm run dev-test

install-crypto:
	npm i crypto-js --save

# instalasi Jest sebagai unit test dari blockchain
install-jest:
	npm i jest --save-dev