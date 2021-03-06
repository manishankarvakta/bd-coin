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
        balance   : ${this.balance}`;
    }

    sign(dataHash){
        return this.keyPair.sign(dataHash);
    }
}

module.exports = Wallet;

