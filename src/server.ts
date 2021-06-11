import { http } from "./http";
import "./websockets/admin";
import "./websockets/client";

http.listen(3333, () => {
  console.log("Server Started at http://localhost:3333");
});
