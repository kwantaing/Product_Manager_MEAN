const mongoose = require('mongoose');
Product = mongoose.model('Product');
const flash = require('express-flash')

module.exports = {
    add : function(req,res){
        console.log("in products.js : ",req.body);
        Product.create(req.body,function(err,product){
            if(err){
                res.json({error: err})
            }else{
                res.json({Success:product})
            }
        })
    },
    showAll : function(req,res){
        Product.find({},function(err,products){
            if(err){
                res.json({error: err})
            }else{
                res.json({products: products})
            }
        })
    },
    removeProduct : function(req,res){
        Product.remove({_id : req.params.id},function(err){
            if(err){
                res.json({error:err})
            }else{
                res.json({success: "successful deletion"})
            }
        })
    },
    editProduct : function(req,res){
        Product.findOneAndUpdate({_id : req.params.id} ,{$set :{title: req.body.title, price: req.body.price, imageUrl: req.body.imageUrl}},{runValidators : true}, function(err,product){
            if(err){
                res.json({error: err})
            }else{
                res.json({updated: product})
            }
        })
    },
    getOne : function(req,res){
        Product.findOne({_id: req.params.id},function(err,product){
            if(err){
                res.json({error: err})
            }else{
                res.json({product: product})
            }
        })
    },
}