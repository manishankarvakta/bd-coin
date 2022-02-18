const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const { render } = require('express/lib/response');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

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
    res.redirect('/blocks');
  });
  
app.listen(HTTP_PORT, () => console.log(`Listening on port: http://localhost:${HTTP_PORT}`));