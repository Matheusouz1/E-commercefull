import Sequelize from "sequelize";

// Importar todos os models utilizados
import User from "../models/User.js";
import Produto from "../models/Produto.js";

// importar a config do banco de dados
import databaseConfig from "../../config/database.js";

// inserir no array todos os models importados
const models = [Produto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection))
    .map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
