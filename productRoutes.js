const router=require("express").Router();

router.get("/",(req,res)=>{

res.send("All Products");

});

router.post("/",(req,res)=>{

res.send("Product Added");

});

module.exports=router;