const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), `foo`)

// //Melakukan Require terhadap file block.js
// const block = new Block('foo', 'bar', 'zoo', 'baz'); 

// //membuat instansiasi block 
// console.log(block.toString());
// console.log(Block.genesis().toString())

// block pertama disebut sebagai genesisBlock
console.log(fooBlock.toString())