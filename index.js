import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";

const server = express();

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of middleware use method to connect with User Routes endpoint;

server.use("/api/user", userRouter);

// // // Ending of middleware use method to connect with User Routes endpoint;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

mongoose
  .connect(
    "mongodb+srv://shivas2710cool00_db_user:clVb21YmcXpJHpts@cluster0.notxlqn.mongodb.net/",
    {
      dbName: "FullBackend_ECommerce",
    }
  )
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// // // Ending of connection MongoDB to ExpressJS through Mongoose;

///////***********************************************************************///////
///////***********************************************************************///////

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running at port :-) ${PORT}`);
});
