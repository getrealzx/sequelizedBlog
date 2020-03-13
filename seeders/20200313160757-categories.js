'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      Name: 'Javascript',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Node',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'CSS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'HTML',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Bootstrap4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'APIs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'React',
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
