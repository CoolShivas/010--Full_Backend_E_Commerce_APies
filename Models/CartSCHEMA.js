import mongoose from "mongoose";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Cart Items Schema;

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductSCHEMA", // To get to know about the DB product table heading names;
    require: true,
  }, // product id which product we are adding with objectId;
  title: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

// // // Ending of Cart Items Schema;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Cart Schema of a particular user;

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSCHEMA", // To get to know about the DB users table;
    require: true,
  },
  items: [cartItemSchema], // Items array of cartItemSchema of a particular user's id cart items holder;
});

// // // Starting of Cart Schema of a particular user;

///////***********************************************************************///////
///////***********************************************************************///////

export const CartSCHEMA = mongoose.model("cart", cartSchema);
