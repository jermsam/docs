const {createServer} = require('http');
const { WebSocketServer } = require('ws');
const DHT = require('hyperdht');
const { relay } = require('@hyperswarm/dht-relay');
const Stream = require('@hyperswarm/dht-relay/ws');
require ('dotenv').config()

const PORT = process.env.PORT || 3210;
const HOST = process.env.HOST || 'localhost';

const server = createServer();

const wss1 = new WebSocketServer({ server });

const dht = new DHT()

wss1.on('connection', function connection(ws) {
    ws.on('error', console.error);
    relay(dht, new Stream(false, ws));
  });

server.listen(PORT,() => {
    console.log(`http://${HOST}:${PORT}`);
});
