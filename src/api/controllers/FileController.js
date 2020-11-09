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
    // try {
    //   const file = await File.findAll();

    //   return file;

    // } catch (err) {
    //   return err;
    // }
    return res.json(await File.findAll());
  }
}

export default new FileController();
