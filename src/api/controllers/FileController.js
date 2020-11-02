import File from "../models/File";

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });
    return res.json(file);
  }
  async get(req, res) {
    const { name } = req.query;

    const file = await File.findOne({
      where: {
        name,
      },
    });
    return file.path;
  }
}

export default new FileController();
