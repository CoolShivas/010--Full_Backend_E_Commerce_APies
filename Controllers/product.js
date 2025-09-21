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

// // // Starting of Get All Product function;

export const getAllProduct = async (request, response) => {
  try {
    let getSaveDBProduct = await ProductSCHEMA.find();

    if (!getSaveDBProduct) {
      console.log("No product available");
      return response.json({ message: "No product available", success: false });
    }
    console.log("List of all the products..");
    response.json({
      message: "List of all the products..",
      success: true,
      getSaveDBProduct,
    });
  } catch (error) {
    console.log("getAllProduct error => ", error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of Get All Product function;

///////***********************************************************************///////
///////***********************************************************************///////
