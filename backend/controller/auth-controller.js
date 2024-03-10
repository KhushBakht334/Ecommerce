const multer = require("multer");
const path = require("path");
const Product=require("../model/pic_model");

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
    try {
        const product= new Product({
            id:req.body.id,
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
module.exports = { picUploadMiddleware, picUpload ,addProduct};
