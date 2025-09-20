import { UserSCHEMA } from "../Models/UserSCHEMA.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Register function;

export const funcRegister = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    if (name === "" || email === "" || password === "") {
      console.log("Please, fill all the fields.");
      return response.json({
        message: "Please, fill all the fields.",
        success: false,
      });
    }

    let createUser = await UserSCHEMA.findOne({ userEmail: email });

    if (createUser) {
      console.log("User already exists..");
      return response.json({
        message: "User already exists..",
        success: false,
      });
    }

    const hashPassWord = await bcrypt.hash(password, 10);

    createUser = await UserSCHEMA.create({
      userName: name,
      userEmail: email,
      userPassword: hashPassWord,
    });

    console.log("User register successfully...!");

    response.json({
      message: "User register successfully...!",
      success: true,
      createUser,
    });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of User Register function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Login function;

export const funcLogin = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (email === "" || password === "") {
      console.log("Please, fill all the fields.");
      return response.json({
        message: "Please, fill all the fields.",
        success: false,
      });
    }

    let loginUser = await UserSCHEMA.findOne({ userEmail: email });

    if (!loginUser) {
      console.log("user not exists signup first..");
      return response.json({
        message: "user not exists signup first..",
        success: false,
      });
    }

    // // // Decrypting the hash password;
    const validPassWord = await bcrypt.compare(
      password,
      loginUser.userPassword
    );

    if (!validPassWord) {
      console.log("Invalid password");
      return response.json({ message: "Invalid password", success: false });
    }

    const token = jwt.sign({ userid: loginUser._id }, "!@#$%^", {
      expiresIn: "1d",
    });

    console.log(`Welcome ${loginUser.userName}`, "Token => ", token);
    response.json({
      message: `Welcome ${loginUser.userName}`,
      success: true,
      token,
    });
  } catch (error) {
    console.log(error.message);
    response.json({ message: error.message });
  }
};

// // // Ending of User Login function;

///////***********************************************************************///////
///////***********************************************************************///////
