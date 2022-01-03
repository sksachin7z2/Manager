const mongoose = require('mongoose');

const { Schema } = mongoose;

  const ProjectSchema = new Schema({
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'user'
      },
   name:{type:String,
   required:true
   },

  
  });
  module.exports=mongoose.model('project',ProjectSchema);