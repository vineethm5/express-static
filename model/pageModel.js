const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamp:true
}
);

module.exports=mongoose.model("PageUser",UserSchema);