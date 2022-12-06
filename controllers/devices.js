const ws = require('../config/socket');
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
  },
  addDevice: async (payload) => {
    const { rows } = await Device.create(payload);
  
    ws.broadcast(
      JSON.stringify({
        type: 'add-device',
        payload: rows[0]
      })
    );
  },
  updateDevice: async (payload) => {
    const { rows, rowCount } = await Device.update(payload);
  
    if (rowCount > 0) {
      ws.broadcast(
        JSON.stringify({
          type: 'update-device',
          payload: rows[0]
        })
      );
    }
  },
  removeDevice: async (payload) => {
    const { rowCount } = await Device.delete(payload);
  
    if (rowCount > 0) {
      ws.broadcast(
        JSON.stringify({
          type: 'remove-device',
          payload: { id: payload.id }
        })
      );
    }
  }
};