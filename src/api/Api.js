import express from "express";
import routes from "./routes";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

import "./database";

class Api {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cookieParser());
    this.server.use(bodyParser());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
    );
    // this.server.use("views", "../views");

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
