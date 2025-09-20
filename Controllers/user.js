import { UserSCHEMA } from "../Models/UserSCHEMA.js";

export const funcRegister = async (request, response) => {
  const { name, email, password } = request.body;

  let createUser = await UserSCHEMA.create({
    userName: name,
    userEmail: email,
    userPassword: password,
  });

  console.log("Printing create user => ", createUser); // Getting data;

  response.json({
    message: "User register successfully...!",
    success: true,
    createUser,
  });
};
