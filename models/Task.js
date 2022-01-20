const mongoose = require('mongoose');

const { Schema } = mongoose;

  const TasksSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
     
      project:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'project'
      },
   title:{type:String,
   required:true
   },

  description:{
       type:String,
       
   },
   
  schedule:{
       type:String,
    //   default:new Date(2022,0,5).setHours(5,30,0)
    
   },
   
   date:{
       type:Date,
       default:Date.now
   }
  });
  module.exports=mongoose.model('task',TasksSchema);