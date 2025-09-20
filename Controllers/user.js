import { UserSCHEMA } from "../Models/UserSCHEMA.js";

export const funcRegister = async (request, response) => {
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
    return response.json({ message: "User already exists..", success: false });
  }

  createUser = await UserSCHEMA.create({
    userName: name,
    userEmail: email,
    userPassword: password,
  });

  //   console.log("Printing create user => ", createUser); // Getting data;

  response.json({
    message: "User register successfully...!",
    success: true,
    createUser,
  });
};
