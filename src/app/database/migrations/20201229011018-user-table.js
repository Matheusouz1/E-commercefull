"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        AllowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        AllowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        AllowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      numberHouse: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
