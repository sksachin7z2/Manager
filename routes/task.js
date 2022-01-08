const express = require("express");
const router = express.Router();
// var fetchuser = require("../middleware/fetchuser");
const Task = require("../models/Task");
const { body, validationResult } = require("express-validator");
const fetchproject = require("../middleware/fetchproject");
const fetchschedule = require("../middleware/fetchschedule");

//Route 1 get all the notes in User detail using :GET "/api/notes/fetchallnotes".login requiered
router.get("/fetchalltasks",fetchproject, async (req, res) => {
  try {
    const tasks = await Task.find({project:req.project});
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
//Route 1 get all the notes in User detail using :GET "/api/notes/fetchallnotes".login requiered
router.get("/fetchallduetasks",fetchschedule, async (req, res) => {
  try {
    const tasks = await Task.find({schedule:req.schedule});
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
//Route 2 to add new notes in User detail using :POST "/api/notes/addnote".login requiered
router.post(
  "/addtask",fetchproject,
  
  [
    body("title", "enter the valid title").isLength({ min: 1 }),
    
    
  ],
  async (req, res) => {
    try {
      const { title, description} = req.body;
      const schedule = req.header('schedule');

      // if there are error,return bad request and the error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const task = new Task({
        title,
        description,
        schedule,
        project: req.project,
      });
      const savedTask = await task.save();

      res.json(savedTask);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  }
);
//Route 3 to update  notes in User detail using :PUT: "/api/notes/updatenote".login requiered
router.put("/updatetask/:id", async (req, res) => {
  const { title, description} = req.body;
  const { schedule} = req.headers;
  try {
    //create a newNote object
    const newTask = {};
    if (title) {
      newTask.title = title;
    }
    if (description) {
      newTask.description = description;
    }
    if(schedule){
      newTask.schedule = schedule;
    }
    

    //find the note to be updated and update it
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Not found");
    }
    // if (task.project.toString() !== req.project) {
    //   return res.status(401).send("not authorised");
    // }
   task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: newTask },
      { new: true }
    );
    res.json({task });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
//Route 4 to delte a note in User detail using :DELETE: "/api/notes/deletenote".login requiered
router.delete("/deletetask/:id", async (req, res) => {

  try {
    //find the note to be delted and deleted it
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Not found");
    }
    // allow deletion if owner owns the note
    // if (task.project.toString() !== req.project) {
    //   return res.status(401).send("not authorised");
    // }
    task = await Task.findByIdAndDelete(req.params.id);
    res.json({ success: "note has been deleted", task: task });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
router.delete("/deletealltasks", fetchproject, async (req, res) => {

  try {
    //find the note to be delted and deleted it
    let tasks = await Task.find({project:req.project});
    if (!tasks[0]) {
      return res.status(404).send("Not found");
    }
    // allow deletion if owner owns the note
    if (tasks[0].project.toString() !== req.project) {
      return res.status(401).send("not authorised");
    }
   
    while(tasks!==null)
    tasks = await Task.findOneAndDelete({project:req.project}) ;
    res.json({ success: "all note has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
module.exports = router;
