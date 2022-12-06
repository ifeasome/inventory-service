const ws = require('../config/socket');
const { Device } = require('../models');
const ws = require('../config/socket');

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