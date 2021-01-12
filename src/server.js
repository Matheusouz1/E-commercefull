
import app from "./app.js";
try {
  app.listen(5533);
  console.log("conectado ao banco");
  console.log(
    "=========================================================================================================================="
  );
} catch (err) {
  console.log(
    "Não foi possivel conectar ao banco, pois o  erro não permitiu" + err
  );
}
