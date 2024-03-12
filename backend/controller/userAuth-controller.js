const User=require("../model/user-model");

const register=async(req, res)=>{
    try {
        const {username,email, password, cartData}=req.body;
        const userExists=await User.find({email});
        if(userExists){
            return res.status(400).json("User already exists");
        }
        res.status(200).json("register");
    } catch (error) {
        console.log(error);
    }
}

module.exports={register}