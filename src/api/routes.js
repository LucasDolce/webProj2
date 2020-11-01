import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import FileController from "./controllers/FileController";
import authMiddleware from "./middleware/auth";

const routes = new Router();
routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);
routes.get("/getUser", SessionController.getUser);
routes.get("/login", SessionController.login);
routes.get("/logout", SessionController.logout);
// routes.post("/upload", FileController.store);

// routes.use(authMiddleware);
routes.get("/find");

export default routes;
