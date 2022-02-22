const Websocket = require('ws');
const P2P_PORT = process.argv[3];
const peers = process.argv[4] ? process.argv[4].split(',') : [];
// ws://localhost:5001

class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];
  }

  listen() {
    const server = new Websocket.Server({ port: P2P_PORT });
    server.on('connection', socket => this.connectSocket(socket));
    this.connectToPeers();
    console.log(`peer to peer connection on: ${P2P_PORT}`)
  }

  connectToPeers() {
    console.log(peers)
    peers.forEach(peer => {
        const socket = new Websocket(peer);
      socket.on('open', () => this.connectSocket(socket));
    });
  }

  connectSocket(socket) {
    this.sockets.push(socket);
    console.log('Socket connected');

    this.messageHandler(socket);
    this.sendChain(socket);
  }

  messageHandler(socket){
      socket.on('message', message => {
          const data = JSON.parse(message)
          this.blockchain.replaceChain(data);
      })
  }

  sendChain(socket){      
    socket.send(JSON.stringify(this.blockchain.chain))
  }

  syncChain(){
      this.sockets.forEach(socket => this.sendChain(socket));
  }
}

module.exports = P2pServer;