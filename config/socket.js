require('dotenv').config();
const WebSocket = require('ws');

const wss = new WebSocket.Server({ 
  port: process.env.PORT || 8080
});

module.exports = {
  broadcast: (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  },
  on: (type, callback) => wss.on(type, callback)
};