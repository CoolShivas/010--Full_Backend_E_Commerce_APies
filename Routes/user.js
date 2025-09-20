import express from "express";
import { funcLogin, funcRegister } from "../Controllers/user.js";

const router = express.Router();
// // // @api description :- user signup/register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", funcRegister);
// // // @api description :- user login
// // // @api method :- post
// // // @api endPoint :- /api/user/login
router.post("/login", funcLogin);

export default router;
