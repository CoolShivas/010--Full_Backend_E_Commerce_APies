import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import bodyParser from "express";
import { config } from "dotenv";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";

const server = express();

server.use(bodyParser.json());
///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of middleware use method to connect with User Routes endpoint;

server.use("/api/user", userRouter);
server.use("/api/product", productRouter);

// // // Ending of middleware use method to connect with User Routes endpoint;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of middleware use method to connect with Cart Routes endpoint;

server.use("/api/cart", cartRouter);

// // // Ending of middleware use method to connect with Cart Routes endpoint;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Set-Up of dotenv;

config({ path: ".env" });

// // // Ending of Set-Up of dotenv;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "FullBackend_ECommerce",
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// // // Ending of connection MongoDB to ExpressJS through Mongoose;

///////***********************************************************************///////
///////***********************************************************************///////

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running at port :-) ${PORT}`);
});
