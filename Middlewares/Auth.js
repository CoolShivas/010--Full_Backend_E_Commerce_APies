import jwt from "jsonwebtoken";
import { UserSCHEMA } from "../Models/UserSCHEMA.js";

const isAuthenticated = async (request, response, next) => {
  const usersLoginToken = request.header("Authen"); // Going to paste the user's login token in POSTMAN before user add, update or delete by it's ID;
  try {
    if (!usersLoginToken) {
      console.log("Please, Login first...by entering your token in header.!");
      return response.json({
        message: "Please, Login first...by entering your token in header.!",
        success: false,
      });
    }

    // // // For verifying the jwt token by usersLoginToken and secret key you have entered at the time of Login user when jwt.sign() you have done;
    let verifyingJwtUserToken = jwt.verify(usersLoginToken, process.env.JWT);

    // // // For identifying user token that you have entered at the time of Login user when jwt.sign({ userid: loginUser._id } you have done;
    let identifyingUserToken = verifyingJwtUserToken.userId;

    // // // For confirming the user token by checking the user's schema having user token or not;
    let confirmUserToken = await UserSCHEMA.findById(identifyingUserToken);

    if (!confirmUserToken) {
      console.log(" Your token is invalid or User not exist...!");
      return response.json({
        message: " Your token is invalid or User not exist...!",
        success: false,
      });
    }

    // // // Now, making the user global for this app by entering this token;
    request.confirmUserToken = confirmUserToken;

    // // // Calling next function after isAuthenticated in routes;
    next();
  } catch (error) {
    console.log("Error occurs from isAuthenticated => ", error.message);
    response.json({ message: error.message });
  }
};

export default isAuthenticated;
