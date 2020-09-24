import express from "express";
import routes from "./routes";

import "./database";

class Api {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new Api().server;
