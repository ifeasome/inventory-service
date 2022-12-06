const ws = require('./config/socket');
const controller = require('./controllers');
const jwt = require('./utils/jwt');

ws.on('connection', (client, req) => {
  if (req.headers['authorization']) {
    const bearer = req.headers['authorization'].split(' ')[1];

    if (jwt.verify(bearer)) {
      return controller(client);
    }
  }

  client.close();
});