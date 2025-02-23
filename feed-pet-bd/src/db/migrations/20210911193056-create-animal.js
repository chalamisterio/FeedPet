'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('animais', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false
      },
      raca: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull:false
      },
      porte: {
        type: Sequelize.STRING,
        allowNull:false
      },
      tipo_animal: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.STRING,
        allowNull:false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('animais');
  }
};