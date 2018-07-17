var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,//将comment的id加到campground中
            ref:"Comment",
        }
        ],
    author:{
        username:String,
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    },
    price:String
    
});

var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;
