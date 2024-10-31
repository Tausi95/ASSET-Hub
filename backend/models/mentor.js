'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    static associate(models) {
      Mentor.hasMany(models.Event, {
        foreignKey: 'mentorId',
        as: 'events',
      });
    }
  }

  Mentor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Mentor',
  });

  return Mentor;
};

