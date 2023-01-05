const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const connectDatabase =require("./helpers/connectDatabase");
const binaryTreeRouter = require("./routes/binaryTreeRoute");

// parse application/json
app.use(bodyParser.json())

connectDatabase();

app.use("/api",binaryTreeRouter)
app.listen(3000, () => {
    console.log("Server is listening at port 3000");
})