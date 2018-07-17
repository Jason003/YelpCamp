var mongoose = require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var UserSchema=new mongoose.Schema({
    username:String,
    password:String,
})

UserSchema.plugin(passportLocalMongoose);//赋予user更多的功能

module.exports=mongoose.model("User",UserSchema);
