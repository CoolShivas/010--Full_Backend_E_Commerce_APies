export const funcRegister = async (request, response) => {
  console.log("Printing the register function => ", request.body);
  /**
   * Restarting 'index.js'
Server is running at port :-) 8000
MongoDB Connected Successfully
Printing the register function =>  { name: 'pari', email: 'pari@gmail.com', password: '123' }
   */
  response.json({
    message: "User register successfully...!",
    success: true,
    data: request.body,
  });
  /**
   * {
    "message": "User register successfully...!",
    "success": true,
    "data": {
        "name": "pari",
        "email": "pari@gmail.com",
        "password": "123"
    }
}
   */
  // // // Therefore, getting the desired Output on both POSTMAN and Terminal;
};
