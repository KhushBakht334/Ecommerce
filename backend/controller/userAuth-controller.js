const User=require("../model/user-model");

const register=async(req, res)=>{
    try {
        const {username,email, password}=req.body;
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json("User already exists");
        }
        let cart={};
        for(let i=0; i<300;i++){
            cart[i]=0;
        }
        let userCreated=await User.create({username, email, password, cartData:cart});
        res.status(200).json({success:true, token:await userCreated.generateToken()});
    } catch (error) {
        console.log(error);
    }
}

const login=async(req, res)=>{
    try {
        const {email, password}=req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
            return res.status(400).json("User Doesnt Exist");
        }
        const isValid=await userExist.comparePassword(password);
        if(isValid){
            return res.status(200).json({msg:"Successfully Logged in", token: await userExist.generateToken()} )
        }else{
            res.status(400).json("Invalid Email or Password");
        }
    } catch (error) {
        console.log(error);
    }
}

const fetchUser=async(req, res)=>{
    try {
        const response=req.user;
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}
module.exports={register, login,fetchUser}