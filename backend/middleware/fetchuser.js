const jwt=require("jsonwebtoken");
const User=require("../model/user-model");

const fetchUser= async(req, res, next)=>{
    const token=req.header("Authorization");
    console.log(token);
    if(!token){
        return res.status(401).json({msg:"Unauthorized http. token not provided"});
     }
    try {
        const isVerified=await jwt.verify(token, process.env.SECRET_KEY);
        console.log(isVerified);

        const user=await User.findOne({_id: isVerified.id});
        req.user=user._id;
        // console.log(user._id);
        next();
    } catch (error) {
        return res.status(401).json({msg:"Invalid token"});
    }
}

module.exports=fetchUser;