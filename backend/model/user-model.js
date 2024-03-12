const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})
UserSchema.pre("save",async function(next){
    const salt=10;
    const hash_password= await bcrypt.hash(this.password, salt);
    this.password=hash_password;
    next();
})

UserSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password, this.password);
}
UserSchema.methods.generateToken=async function(){
    return jwt.sign({
        id:this.id
    },
    process.env.SECRET_KEY
    )
}
const User=new mongoose.model("User", UserSchema);

module.exports=User;
