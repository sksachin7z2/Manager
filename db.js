const mongoose=require("mongoose");


const mongoURI="mongodb://localhost:27017/manager?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI="mongodb+srv://sksachin7z2:ramdulari123@cluster0.f01hh.mongodb.net/manager?authSource=admin&replicaSet=atlas-ppw553-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;