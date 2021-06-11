import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { SettingsController } from "./controllers/SettingsController";
import { MessagesController } from "./controllers/MessagesController";

export const routes = Router();

const usersController = new UsersController();
const settingsController = new SettingsController();
const messagesController = new MessagesController();

routes.post("/users", usersController.create);

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
