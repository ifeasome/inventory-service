const deviceController = require('./devices');
const modelController = require('./models');

module.exports = (client) => {
  deviceController.getAll(client);
  modelController.getAll(client);

  client.on('message', (message) => {
    console.log(message);
  });
};