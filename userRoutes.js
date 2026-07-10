const router=require("express").Router();

router.post("/register",(req,res)=>{

res.send("User Registered");

});

router.post("/login",(req,res)=>{

res.send("Login Success");

});

module.exports=router;