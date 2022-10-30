import express  from "express";

import users_router from "./users";
import auth_router from "./auth";

const routes = express.Router()

routes.use("/user", users_router)
routes.use("/auth", auth_router)


export default routes