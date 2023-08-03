const mongoose=require("mongoose");
require('dotenv').config()

const mongoURI=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f01hh.mongodb.net/manager?authSource=admin&replicaSet=atlas-ppw553-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;
