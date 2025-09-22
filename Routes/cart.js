import express from "express";
import { addToCartItems } from "../Controllers/cart.js";
import isAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();
// // // @api description :- first authenticate then only add the items in the cart;
// // // @api method :- post
// // // @api endPoint :- /api/cart/additem
router.post("/additem", isAuthenticated, addToCartItems);

export default router;
