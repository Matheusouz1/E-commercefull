import Sequelize from "sequelize";

class Produtos extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        imagens: Sequelize.STRING,
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        preco_custo: Sequelize.BIGINT,
        preco_antigo: Sequelize.BIGINT,
        preco_final: Sequelize.BIGINT,
        estoque: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'Produtos',
      }
    );
    return this;
  }
}

export default Produtos;
