///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add To Cart Items or Product function;

export const addToCartItems = async (request, response) => {
  console.log("Items added successfully in your cart", request.body);
  /**
   * Server is running at port :-) 8000
MongoDB Connected Successfully
Items added successfully in your cart {
  productId: '68cfcee21c2943fabb49a44b',
  title: 'Micromax',
  price: 12500,
  quantity: 5
}
   * 
   */
  response.json({
    message: "Items added successfully in your cart",
    success: true,
    data: request.body,
  });
  /**
   * {
    "message": "Items added successfully in your cart",
    "success": true,
    "data": {
        "productId": "68cfcee21c2943fabb49a44b",
        "title": "Micromax",
        "price": 12500,
        "quantity": 5
    }
}
   */
};

// // // Ending of Add To Cart Items or Product function;

///////***********************************************************************///////
///////***********************************************************************///////
