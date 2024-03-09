require("dotenv").config();
const express=require('express');
const app=express();
const connectToDB=require("./db/db")

app.route("/").get((req, res)=>{
   try {
    res.status(200).json("hi momna");
   } catch (error) {
    console.log(error);
   }
})

const PORT=2000;

connectToDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening at Port ${PORT}`);
    })
})
