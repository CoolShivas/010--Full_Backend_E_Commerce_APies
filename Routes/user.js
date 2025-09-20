import express from "express";
import { funcRegister } from "../Controllers/user.js";

const router = express.Router();
// // // @api description :- user signup/register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", funcRegister);

export default router;
