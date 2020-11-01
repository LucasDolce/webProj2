import jwt from "jsonwebtoken";
import * as Yup from "yup";

import User from "../models/User";
import authConfig from "../config/auth";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "falha ao validar" });
    }
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Usuario nao pertence a base" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const { id, name } = user;
    res.cookie("id", id);
    // console.log(res);

    // console.log("this is cookie", res);

    return res.redirect("http://localhost:8080/files");
  }

  async logout(req, res, next) {
    res.clearCookie("id");
    // console.log(res);
    next();
  }

  async getUser(req, res, next) {
    console.log(req);
    if (req.cookies && req.cookies.id) {
      return User.findOne({ where: { id: req.cookies.id } });
    }
    next();
  }

  async login(req, res, next) {
    if (req.cookies && req.cookies.id) {
      res.redirect("http://localhost:8080/files");
      return;
    }
    res.redirect("http://localhost:8080/login");
  }
}

export default new SessionController();
