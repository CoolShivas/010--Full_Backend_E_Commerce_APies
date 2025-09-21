import { ProductSCHEMA } from "../Models/ProductSCHEMA.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add Product function;

export const addProduct = async (request, response) => {
  try {
    let addCreateProduct = await ProductSCHEMA.create(request.body); // // Taking whatever developer create on POSTMAN body tag;

    if (!addCreateProduct) {
      console.log("Please, enter the product with details..");
      return response.json({
        message: "Please, enter the product with details..",
        success: false,
      });
    }
    console.log("Product added successfully...!", addCreateProduct);
    return response.json({
      message: "Product added successfully...!",
      success: true,
      addCreateProduct,
    });
  } catch (error) {
    console.log("addProduct error => ", error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of Add Product function;

///////***********************************************************************///////
///////***********************************************************************///////
