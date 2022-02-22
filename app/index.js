const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const P2pServer = require('./P2p-server');

// const HTTP_PORT = process.env.HTTP_PORT || 3001;
const HTTP_PORT = process.argv[2];

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.send(`<h1>hello! Welcome to my custom blockchain</h1>
    <a href="/blocks">check blockchain</a>
  `)
});

app.get('/blocks', (req, res) => {
	res.json(bc.chain);
});

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);

    p2pServer.syncChain();
     
    res.redirect('/blocks');
  });
  
app.listen(HTTP_PORT, () => console.log(`Listening on port: http://localhost:${HTTP_PORT}/blocks`));
p2pServer.listen();