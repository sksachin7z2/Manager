const mongoose = require('mongoose');

const { Schema } = mongoose;

  const MediaSchema = new Schema({
  
   selectedpic:{
       type:String,
       
   },
   date:{
       type:Date,
       default:Date.now
   }
  });
  const Media=mongoose.model('media',MediaSchema);
  
  module.exports=Media;
