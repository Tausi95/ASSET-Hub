'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

// seeds/[timestamp]-demo-events.js
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('events', [
      {
        title: 'ASSET Sports & Science',
        date: new Date('2024-09-24'),
        description: 'A sports and science day...',
        type: 'Entertainment & learning'
      },
      {
        title: 'Science Expo 2024',
        date: new Date('2024-10-15'),
        description: 'A global science expo...',
        type: 'Expo'
      }
      //  more events as needed
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('events', null, {});
  }
};

