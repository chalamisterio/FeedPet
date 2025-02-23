'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Usuario, {
        through: "usuarios_animais",
        as: "usuario",
        foreignKey: {
          name: "id_animal",
          type: DataTypes.UUID
        }
        })
    }
  };
  Animal.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: {
      type:DataTypes.STRING,
      allowNull:false
    },
    raca: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cor: {
      type:DataTypes.STRING,
      allowNull:false
    },
    porte: {
      type:DataTypes.STRING,
      allowNull:false
    },
    tipo_animal: {
      type:DataTypes.STRING,
      allowNull:false
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Animal',
    tableName: 'animais'
  });
  return Animal;
};