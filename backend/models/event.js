'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Define associations here
      Event.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
        as: 'mentor',
      });
    }
  }

  Event.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};

