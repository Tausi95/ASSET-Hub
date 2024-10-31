const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('stemprolinks_database', 'root', 'Alightedxx915900$', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

