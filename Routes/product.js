import express from "express";
import { addProduct } from "../Controllers/product.js";

const router = express.Router();
// // // @api description :- add products
// // // @api method :- post
// // // @api endPoint :- /api/product/add
router.post("/add", addProduct);

export default router;
