const ChailUtil = require('../chain-util');
const {INITIAL_BALANCE} = require('../config');

class Wallet{
    constructor(){
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChailUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString(){
        return `Wallet - 
        publicKey: ${this.publicKey}
        blance   : ${this.balance}`;
    }
}

module.exports = Wallet;

