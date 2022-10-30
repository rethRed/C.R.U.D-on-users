import express  from "express";

import { LoginController } from "../../controllers/auth";
import { LoginInputValidator } from "../../utils/inputValidator";

const auth_router = express.Router()

auth_router.post("/login", LoginInputValidator, LoginController)


export default auth_router