'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false
      },
      email: {
              type:Sequelize.STRING,
              allowNull:false,
              unique:true
              },
      senha: {
              type: Sequelize.STRING,
              allowNull: false,
              set(senha) {
                this.setDataValue("senha", bcrypt.hashSync(senha, 10));
              }
          },
      cargo: {
              type:Sequelize.STRING,
              allowNull:false,
              validate: {
                isIn: [["admin","usuario"]]
              },
              defaultValue: "usuario"
          },
      telefone: {
        type:Sequelize.STRING,
      },
      cpf: {
        type:Sequelize.STRING,
      },
      data_nascimento: {
        type:Sequelize.DATE
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
    await queryInterface.dropTable('usuarios');
  }
};