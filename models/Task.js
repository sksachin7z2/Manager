const mongoose = require('mongoose');

const { Schema } = mongoose;

  const TasksSchema = new Schema({
     
      project:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'project'
      },
   title:{type:String,
   required:true
   },

  description:{
       type:String,
       required:true
   },
   
  schedule:{
       type:Date,
       default:Date.now
   },
   
   date:{
       type:Date,
       default:Date.now
   }
  });
  module.exports=mongoose.model('task',TasksSchema);