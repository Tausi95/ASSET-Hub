'use strict';
module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define('Network', {
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    connectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});

  Network.associate = function(models) {
    Network.belongsTo(models.Profile, {
      foreignKey: 'profileId',
      as: 'profile',
    });

    Network.belongsTo(models.Profile, {
      foreignKey: 'connectionId',
      as: 'connection',
    });
  };

  return Network;
};

