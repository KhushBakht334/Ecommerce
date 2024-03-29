const multer = require("multer");
const path = require("path");
const Product=require("../model/pic_model");
const User = require("../model/user-model");

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({ storage: storage });
const PORT = 2000;

const picUploadMiddleware = upload.single('product'); // Define the middleware

const picUpload = async (req, res) => {
    try {
        res.json({
            success: 1,
            image_url: `http://localhost:${PORT}/images/${req.file.filename}`
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

const addProduct=async(req, res)=>{
    const products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product=last_product_array[0]
        id=last_product.id+1;
    }else{
        id=1;
    }
    try {
        const product= new Product({
            id:id,
            name:req.body.name,
            image:req.body.image,
            category:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price
        })
        console.log(product);
        await product.save();
        console.log("saved");
        return res.status(200).json({success:true, name: req.body.name})
    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
}
const removeProduct=async(req, res)=>{
    try {
        await Product.findOneAndDelete({id:req.body.id});
        console.log("Removed");
        res.json({
            success:true,
            name:req.body.name
        })
    } catch (error) {
        console.log(error);
    }
}
const getAllProducts=async(req, res)=>{
    try {
        let products= await Product.find({});
        console.log("all products fetched");
        res.send(products);
    } catch (error) {
        console.log(error);
    }
}
const newCollections=async(req, res)=>{
    try {
        const products=await Product.find({});
        const new_collection= products.slice(1).slice(-8);
        console.log('products fetched');
        res.status(200).json(new_collection);
    } catch (error) {
        console.log(error);
    }
}
const popularWomen=async(req, res)=>{
    try {
        const products=await Product.find({category:"women"});
        const popular_women=products.slice(1,4);
        res.status(200).json(popular_women);
    } catch (error) {
        console.log(error);
    }
}
const addToCart=async(req, res)=>{
    try {
        let userData=await User.findOne({_id:req.user._id});
        console.log("Added",req.body.itemId);
        userData.cartData[req.body.itemId] +=1;
        await User.findOneAndUpdate({_id:req.user._id},{cartData:userData.cartData});
        res.send("Added")
    } catch (error) {
        console.log(error);
    }
}
const removeFromCart=async(req, res)=>{
    try {
        let userData=await User.findOne({_id:req.user._id});
        console.log("Removed",req.body.itemId);
        if(userData.cartData[req.body.itemId]>0)
        userData.cartData[req.body.itemId] -=1;
        await User.findOneAndUpdate({_id:req.user._id},{cartData:userData.cartData});
        res.send("Removed")
    } catch (error) {
        console.log(error);
    }
}

const getCart=async(req,res)=>{
    try {
        let userData=await User.findOne({_id:req.user._id});
        res.json(userData.cartData);
    } catch (error) {
        console.log(error);
    }
}
module.exports = { picUploadMiddleware, picUpload ,addProduct,removeProduct,getAllProducts,newCollections,popularWomen,addToCart,removeFromCart,getCart};
