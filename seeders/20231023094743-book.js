'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'The Hobbit',
        description:
          "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
        author: 'J. R. R. Tolkien',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  },
};
