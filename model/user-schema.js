const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        trim : true,
        min : 2,
        max : 20
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        min : 2,
        max : 20
    },
    username : {
        type : String,
        required : true,
        unique : true,
        index : true,
        lowercase : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email entered is invalid!");
            }
        }
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }
});

const user = new mongoose.model("user", userSchema);

module.exports = user;