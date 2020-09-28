import * as Yup from "yup";
import User from "../models/User";

class UserController {
  async store(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required().min(3),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "falha ao validar" });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: "Usuário já existente." });
    }

    const { id, name, email, password } = await User.create(req.body);

    return res.redirect("http://localhost:8080/login");
  }
}

export default new UserController();
