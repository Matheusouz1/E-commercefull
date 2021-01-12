
// Importações necessarias
import { Router } from "express";
const route = new Router();

// Importação de controllers
import ProdutoController from "./app/controllers/ControllersProdutos/AdminControllerUsuario/produtoAdminController.js";

import AuthController from "./app/controllers/AuthController.js";
import UserController from "./app/controllers/UserController.js";
import AuthMiddleware from "./app/middlewares/auth.js";

// rotas

//criar loja
route.post('/register', AuthController.store);

route.get("/", function (req, res) {
  res.send("Olá mundo");
});

route.get("/produtos", ProdutoController.index);
route.get("/produto/:id", ProdutoController.show);
route.post("/produto", ProdutoController.store);
route.put("/produto/:id", ProdutoController.update);
route.delete("/produto/:id", ProdutoController.delete);

// exportação do arquivo
export default route;
