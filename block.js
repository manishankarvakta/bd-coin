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
}

module.exports = Block;