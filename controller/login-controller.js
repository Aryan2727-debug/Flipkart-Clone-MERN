const User = require("../model/user-schema.js");

const userLogin = async (request, response) => {
    try{

      const username = request.body.username;
      const password = request.body.password;

      let user = await User.findOne({username : username, password : password});

      if(user){
        return response.status(200).json({data : user});
      }else{
        return response.status(401).json("Invalid Login");
      }
    }catch(err){
        response.status(500).json("Error", err.message);
    };
};

module.exports = userLogin;