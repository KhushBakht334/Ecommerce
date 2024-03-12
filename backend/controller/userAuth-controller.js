const User=require("../model/user-model");

const login=async(req, res)=>{
    try {
        // {username,email, password, cartData}=req.body;
        res.status(200).json("login");
    } catch (error) {
        console.log(error);
    }
}

module.exports={login}