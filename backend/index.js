require("dotenv").config();
const express = require('express');
const app = express();
const AuthRouter = require("./router/auth");
const connectToDB = require("./db/db");
const path = require("path");
const cors=require('cors')

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}
// Serve static files from the 'upload/images' directory
app.use('/images', express.static(path.join(__dirname, 'upload', 'images')));

// Route for authentication
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", AuthRouter);

const PORT = 2000;

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at Port ${PORT}`);
    });
});
