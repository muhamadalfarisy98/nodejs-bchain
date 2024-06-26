const Block = require('./block');
const Blockchain = require('./blockchain');

describe('Blockchain', () => {
    let bc;
    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('starts with the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis())
    })

    it('adds a new block', () => {
        const data = 'foo'
        bc.addBlock(data)
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
    })

    it('validates a valid chain', () => { 
        bc2.addBlock('foo'); 
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('invalidates a chain with a corrupt genesis block', () => {
        bc2.chain[0].data = 'Bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false); 
    });

    it('invalidates a corrupt chain', () => {
        bc2.addBlock('foo');
        bc2.chain[1].data = 'Not foo'; 
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    // wallet - akses kita ke blockchain


})