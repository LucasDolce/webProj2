import Sequelize from "sequelize";

import User from "../models/User";
import File from "../models/File";
import databaseConfig from "../config/database";

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
