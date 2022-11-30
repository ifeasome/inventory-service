const ws = require('./config/socket');
const controller = require('./controllers');

ws.on('connection', (client, req) => {
  controller(client);
});
