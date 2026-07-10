const router=require("express").Router();

router.post("/",(req,res)=>{

res.send("Order Placed");

});

router.get("/",(req,res)=>{

res.send("Orders");

});

module.exports=router;