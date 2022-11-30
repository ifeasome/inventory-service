const { Device } = require('../models');

module.exports = {
  getAll: async (client) => {
    const { rows } = await Device.getAll();

    client.send(
      JSON.stringify({
        type: 'all-devices',
        payload: rows
      })
    );
  }
};