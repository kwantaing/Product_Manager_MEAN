const mongoose = require('mongoose');


module.exports = function(app){
    var ProductSchema = new mongoose.Schema({
        title: {type: String, required: [true,"Title is required"], minlength:[4,"Title needs to be at least 4 characters"]},
        price : {type: Number, required: [true,"Price is required"]},
        imageUrl : { type: String, required: false, default: ""}
    },
        {timestamps: true})
        mongoose.model('Product',ProductSchema)
}