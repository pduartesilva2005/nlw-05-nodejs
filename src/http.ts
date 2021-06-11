import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database/connection";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("pages/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("pages/admin.html");
});

export const http = createServer(app);
export const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Socket connected", socket.id);
});

app.use(express.json());
app.use(routes);
