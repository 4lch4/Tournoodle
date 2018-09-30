'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tournaments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameName: {
        type: Sequelize.STRING
      },
      tourneyType: {
        type: Sequelize.STRING
      },
      tourneyName: {
        type: Sequelize.STRING
      },
      hostedDate: {
        type: Sequelize.STRING
      },
      signupDate: {
        type: Sequelize.STRING
      },
      thirdPlaceMatch: {
        type: Sequelize.BOOLEAN
      },
      randomizeSeeds: {
        type: Sequelize.BOOLEAN
      },
      tourneyDesc: {
        type: Sequelize.TEXT
      },
      competitors: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Tournaments');
  }
};