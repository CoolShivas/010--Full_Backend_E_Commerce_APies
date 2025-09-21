import express from "express";
import {
  addProduct,
  getAllProduct,
  getProductById,
} from "../Controllers/product.js";

const router = express.Router();
// // // @api description :- add products
// // // @api method :- post
// // // @api endPoint :- /api/product/add
router.post("/add", addProduct);
// // // @api description :- get all products
// // // @api method :- get
// // // @api endPoint :- /api/product/allproduct
router.get("/allproduct", getAllProduct);
// // // @api description :- get product by its id
// // // @api method :- get
// // // @api endPoint :- /api/product/allproduct/id
router.get("/:idpro", getProductById);

export default router;
