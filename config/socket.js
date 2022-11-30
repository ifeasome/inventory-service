require('dotenv').config();

const WebSocket = require('ws');

const wss = new WebSocket.Server({ 
  port: process.env.PORT || 8080
});

module.exports = wss;