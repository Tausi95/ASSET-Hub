const Connection = require('../models/network');

const getConnections = async (req, res) => {
  try {
    const connections = await Connection.findAll();
    res.status(200).json(connections);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const addConnection = async (req, res) => {
  try {
    const connectionData = req.body;
    const newConnection = await Connection.create(connectionData);
    res.status(201).json(newConnection);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getConnections,
  addConnection,
};

