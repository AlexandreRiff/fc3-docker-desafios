import express from "express";
import server from "./config/server.js";
import router from "./routes.js";

const port = server.port;

const app = express();

app.use(router);

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
