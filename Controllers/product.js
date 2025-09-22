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
    console.log("List of all the products => ", getSaveDBProduct);
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

// // // Starting of Get Product By ID function;

export const getProductById = async (request, response) => {
  const idProduct = request.params.idpro;
  // // // Accessing request.params.idpro almost never throws in Express.
  // // // If idpro is missing, it will just be undefined, not an exception
  // // // Put only the error-prone code (like DB queries, async calls, or parsing) in the try block.

  try {
    let getProByID = await ProductSCHEMA.findById(idProduct);

    if (!getProByID) {
      console.log("No product exist by this id..");
      return response.json({
        message: "No product exist by this id..",
        success: false,
      });
    }
    console.log("Here is your specific product => ", getProByID);
    response.json({
      message: "Here is your specific product..",
      success: true,
      data: getProByID,
    });
  } catch (error) {
    console.log("getProductByID error => ", error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of Get Product By ID function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Update Product By ID function;

export const updateProductById = async (request, response) => {
  const updateID = request.params.idupdate;

  try {
    let updateProByID = await ProductSCHEMA.findByIdAndUpdate(
      updateID,
      request.body, // // It will show the specific product id's request body;
      {
        new: true, // // It is used to add the new field in the request body;
      }
    );

    if (!updateProByID) {
      console.log("Invalid Id...!");
      return response.json({ message: "Invalid Id...!", success: false });
    }

    console.log("Specific product updated successfully...!", updateProByID);
    response.json({
      message: "Specific product updated successfully...!",
      success: true,
      data: updateProByID,
    });
  } catch (error) {
    console.log("getProductByID error => ", error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of Update Product By ID function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Delete Product By ID function;

export const deleteProductById = async (request, response) => {
  const deleteID = request.params.iddel;

  try {
    let deleteProByID = await ProductSCHEMA.findByIdAndDelete(deleteID);

    if (!deleteProByID) {
      console.log("Invalid Id for deletion.");
      return response.json({ message: "Invalid Id..", success: false });
    }

    console.log("Product deleted successfully...!");
    response.json({
      message: "Product deleted successfully...!",
      success: true,
    });
  } catch (error) {
    console.log("deleteProductByID error => ", error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of Delete Product By ID function;

///////***********************************************************************///////
///////***********************************************************************///////
