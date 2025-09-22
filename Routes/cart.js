import express from "express";
import { addToCartItems, getUserCart } from "../Controllers/cart.js";
import isAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();
// // // @api description :- first authenticate then only add the items in the cart;
// // // @api method :- post
// // // @api endPoint :- /api/cart/additem
router.post("/additem", isAuthenticated, addToCartItems);
// // // @api description :- first authenticate then get the specific user cart;
// // // @api method :- get
// // // @api endPoint :- /api/cart/usercart
router.get("/usercart", isAuthenticated, getUserCart);

export default router;
