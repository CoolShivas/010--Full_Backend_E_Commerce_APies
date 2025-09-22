import { CartSCHEMA } from "../Models/CartSCHEMA.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add To Cart Items or Product function;

export const addToCartItems = async (request, response) => {
  const { productId, title, price, quantity } = request.body;

  // // // Getting the user id that is already authenticated and maked the user globally;
  const userId = request.confirmUserToken;

  // // // Finding or Searching the user id on the database whether the user's cart is available or not. If not then assigning the new cart to the user. If already having then on that cart adding the items on it.
  let cart = await CartSCHEMA.findOne({ userId });

  if (!cart) {
    // // // If user not having the cart then assigning the cart with empty items array initially blank to the user;
    cart = new CartSCHEMA({ userId, items: [] });
  }

  // // // Finding the index of the product;
  // // // Finding the item index if it already exist then instead of spearately adding it. With the help of product index only increase the product price and quantity.
  // // // Therefore, findIndex will return the -1 if not found. If found then return its index;
  let itemIndex = cart.items.findIndex((indexOfItem) => {
    return indexOfItem.productId.toString() === productId;
    // // // Converting this (indexOfItem.productId.toString()) because it is an ObjectId as in CartSCHEMA we have made the productId;
    // // // If productId === cart having productId then we will get the index of that product. By which we can only increase its price and quantity instead of separately assinging it again;
  });

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
    cart.items[itemIndex].price += price * quantity;
  } else {
    // // // If item not exist in the cart then add it on the cart by push method;
    cart.items.push({ productId, title, price, quantity });
  }

  // // // Saving the cart;
  await cart.save();

  console.log("Items added successfully...", cart); // // Getting the same Output on Terminal as we get the response output as;
  response.json({
    message: "Items added successfully...",
    success: true,
    cart,
  });
  // // // Open the POSTMAN then select the header tag fill both key as Authen and value as login user token;
  // // // Then, select the body tag and fill the raw data as :-
  /**
   * {
    "productId":"68cfa132cc87a8e5ac59f8d0",
    "title": "Infinix Hot 10s",
    "price": 7500,
    "quantity":1
}
   */
  // // // Then, enter the URL as (http://localhost:8000/api/cart/additem) and hit send btn;
  // // // Getting the response as :-
  /**
   * {
    "message": "Items added successfully...",
    "success": true,
    "cart": {
        "items": [
            {
                "productId": "68cfa132cc87a8e5ac59f8d0",
                "title": "Infinix Hot 10s",
                "price": 7500,
                "quantity": 1,
                "_id": "68d13eee96ebb27bea27f60c"
            }
        ],
        "_id": "68d13eee96ebb27bea27f60b",
        "__v": 0
    }
}
   */
  // // // Again hitting the send btn and the response is different with the same product having different price and quantity :-
  /**
   * {
    "message": "Items added successfully...",
    "success": true,
    "cart": {
        "_id": "68d121cfe7ab029a63af5888",
        "userId": "68cf96272cb8522486e7183c",
        "items": [
            {
                "productId": "68cfa132cc87a8e5ac59f8d0",
                "title": "Google Pixy",
                "price": 160000,
                "quantity": 4,
                "_id": "68d1256bb393c89ac2a2998d"
            }
        ],
        "__v": 1
    }
}
   */
};

// // // Ending of Add To Cart Items or Product function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Getting User Specific Cart function;

export const getUserCart = async (request, response) => {
  const userId = request.confirmUserToken;

  let cart = await CartSCHEMA.find({ userId });

  if (!cart) {
    console.log("Sorry, User cart not found..!");
    return response.json({
      message: "Sorry, User cart not found..!",
      success: false,
    });
  }

  console.log("Fetching user cart successfully => ", cart);
  response.json({
    message: "Fetching user cart successfully...!",
    success: true,
    cart,
  });
  // // // Open the POSTMAN then select the header tag fill both key as Authen and value as login user token;
  // // // Then, enter the URL as (http://localhost:8000/api/cart/usercart) and hit send btn;
  // // // Getting the response as :-
  /**
   * {
    "message": "Fetching user cart successfully...!",
    "success": true,
    "cart": [
        {
            "_id": "68d185df977aec5d020e525f",
            "userId": "68cf96272cb8522486e7183c",
            "items": [
                {
                    "productId": "68cfa132cc87a8e5ac59f8d0",
                    "title": "Infinix Hot 10s",
                    "price": 182500,
                    "quantity": 5,
                    "_id": "68d185df977aec5d020e5260"
                },
                {
                    "productId": "68cfc88f9fd463fa4a9af53a",
                    "title": "Xiaomi",
                    "price": 1600,
                    "quantity": 2,
                    "_id": "68d187260ab3e815ffdb324d"
                }
            ],
            "__v": 1
        }
    ]
}
   */
};

// // // Ending of Getting User Specific Cart function;

///////***********************************************************************///////
///////***********************************************************************///////
