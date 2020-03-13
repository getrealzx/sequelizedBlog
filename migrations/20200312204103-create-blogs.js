'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      authorid: {
        type: Sequelize.INTEGER
      },
      categoryid: {
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.STRING
      },
      authorid: {
        type: Sequelize.INTEGER,
        references:{
          model:"authors",
          key:"id"
        },
        allowNull:false
      },
      categoryid: {
        type: Sequelize.INTEGER,
        references:{
          model:"categories",
          key:"id"
        },
        allowNull:false
      },
      summary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('blogs');
  }
};