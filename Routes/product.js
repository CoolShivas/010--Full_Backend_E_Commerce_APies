import express from "express";
import { addProduct, getAllProduct } from "../Controllers/product.js";

const router = express.Router();
// // // @api description :- add products
// // // @api method :- post
// // // @api endPoint :- /api/product/add
router.post("/add", addProduct);
// // // @api description :- get all products
// // // @api method :- get
// // // @api endPoint :- /api/product/allproduct
router.get("/allproduct", getAllProduct);

export default router;
