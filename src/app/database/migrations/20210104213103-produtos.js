"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Produtos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        PrimaryKey: true,
      },
      imagens: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco_custo: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      preco_antigo: {
        type: Sequelize.BIGINT,
      },
      preco_final: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Produtos");
  },
};
