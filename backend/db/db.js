const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI;

const connectToDB=async()=>{
    try {
        await mongoose.connect(URI);
            console.log("Connected to DB successfully");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports=connectToDB;