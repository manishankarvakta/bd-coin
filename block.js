// Block Class
class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block -
            Timestamp: ${this.timestamp}
            Last hash: ${this.lastHash.substring(0, 10)}
            Hash     : ${this.hash.substring(0, 10)}
            Data     : ${this.data}`;
    }

    static genesis(){
        return new this('Genesis time', '-------', 'f1hy-j87ygt', []);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = "to-do";

        return new this(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;