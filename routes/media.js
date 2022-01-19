const express =require('express');
const router=express.Router();
const Media=require('../models/Media')

router.post(
    "/addmedia",
    
    async (req, res) => {
      try {
        const {media} = req.body;
       
            // console.log(media)
        // if there are error,return bad request and the error
       
        const mediap = new Media({
            selectedpic:media
        });
        const savedMedia = await mediap.save();
  
        res.json(savedMedia);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured");
      }
    }
  );

  module.exports=router;