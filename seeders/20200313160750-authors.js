'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', [{
      Name: 'Austin',
      bio: '',
      imgURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Alina',
      bio: '',
      imgURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Jaye',
      bio: '',
      imgURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Daniel',
      bio: '',
      imgURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'John',
      bio: '',
      imgURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
