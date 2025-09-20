import express from "express";
import mongoose from "mongoose";

const server = express();

const PORT = 8000;

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

server.listen(PORT, () => {
  console.log(`Server is running at port :-) ${PORT}`);
});
