import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
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
// // // @api endPoint :- /api/product/:id
router.get("/:idpro", getProductById);
// // // @api description :- update product by its id
// // // @api method :- put
// // // @api endPoint :- /api/product/:id
router.put("/:idupdate", updateProductById);
// // // @api description :- delete product by its id
// // // @api method :- delete
// // // @api endPoint :- /api/product/:id
router.delete("/:iddel", deleteProductById);

export default router;
