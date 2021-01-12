import sequelize from "sequelize";
const { Op } = sequelize
import Produto from "../../../models/Produto.js";

class ProdutoController {
  async store(req, res) {
    const {
      imagens,
      nome,
      descricao,
      preco_custo,
      preco_antigo,
      preco_final,
      estoque,
    } = req.body;

    const produto = await Produto.create({
      imagens,
      nome,
      descricao,
      preco_custo,
      preco_antigo,
      preco_final,
      estoque,
      status: false,
    });
    return res.json({ produto });
  }

  async index(req, res) {
    // esse retorno de produtos deve ter relação com os usuarios
    // só deve ser mostrado os produtos que o usuario(proprietario), expos na sua "vitrine".
    const produtos = await Produto.findAll({
      order: [["id", "ASC"]],
      where: {
        estoque: {
          [Op.ne]: 0,
        },
      },
    });

    return res.json({ produtos });
  }

  async show(req, res) {
    const { id } = req.params;

    const produto = await Produto.findAll({ where: { id } });

    return res.json({ produto });
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      imagens,
      nome,
      descricao,
      preco_custo,
      preco_antigo,
      preco_final,
      estoque,
    } = req.body;

    const produto = await Produto.findByPk(id);

    await produto.update({
      imagens,
      nome,
      descricao,
      preco_custo,
      preco_antigo,
      preco_final,
      estoque,
    });

    return res.json({ produto });
  }

  async delete(req, res) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    await produto.destroy(id);

    return res.json({ produto });
  }
}

export default new ProdutoController();
