import express from "express";
import routes from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

import "./database";

class Api {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser());

    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      this.server.use(cors());
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new Api().server;
