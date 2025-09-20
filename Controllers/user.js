export const funcRegister = async (request, response) => {
  console.log("Printing the register function => ", request.body);
  /**
   * Printing the register function =>  undefined
   */
  response.json({
    message: "User register successfully...!",
    success: true,
    data: request.body,
  });
  /**
   * {
    "message": "User register successfully...!",
    "success": true
}
   */
  // // // Therefore, not getting the desired Output i.e,(data) on both POSTMAN and Terminal ;
};
