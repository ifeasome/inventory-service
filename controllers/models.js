const { Model } = require('../models');

module.exports = {
  getAll: async (client) => {
    const { rows } = await Model.getAll();

    client.send(
      JSON.stringify({
        type: 'all-models',
        payload: rows
      })
    );
  }
};