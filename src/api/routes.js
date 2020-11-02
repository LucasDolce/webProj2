import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import FileController from "./controllers/FileController";
import multerConfig from "./config/multer";
import multer from "multer";
import authMiddleware from "./middleware/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);
routes.get("/getUser", SessionController.getUser);
routes.get("/login", SessionController.login);
routes.get("/logout", SessionController.logout);
routes.post("/uploadFile", upload.single("file"), FileController.store);
routes.get("/getFile", FileController.get);

// routes.use(authMiddleware);
routes.get("/find");

export default routes;
