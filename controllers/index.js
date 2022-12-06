const deviceController = require('./devices');
const modelController = require('./models');

module.exports = (client) => {
  deviceController.getAll(client);
  modelController.getAll(client);

  client.on('message', async (message) => {
    try {
      const { type, payload } = JSON.parse(message);
  
      switch(type) {
        case 'add-device':
          await deviceController.addDevice(payload);
          break;
        case 'update-device':
          await deviceController.updateDevice(payload);
          break;
        case 'remove-device':
          await deviceController.removeDevice(payload);
          break;
      }
    }
    catch (err) {
      client.send(
        JSON.stringify({
          type: 'error',
          payload: err.message
        })
      );
    }
  });
};