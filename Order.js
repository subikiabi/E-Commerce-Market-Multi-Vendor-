const mongoose=require("mongoose");

const OrderSchema=new mongoose.Schema({

customer:String,

products:Array,

total:Number,

status:String

});

module.exports=mongoose.model("Order",OrderSchema);