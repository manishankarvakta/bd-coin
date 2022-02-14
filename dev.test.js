const { mineBlock } = require('./block');
const Block = require('./block');

// const block = new Block('foo', 'bar', 'zoo', 'baz');
// console.log(block.toString());
// console.log(Block.genesis().toString())

// mineBlock
const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString())