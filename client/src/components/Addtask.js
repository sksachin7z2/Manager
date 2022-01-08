import React, { useContext, useState } from "react";
import TasksContext from "../context/tasks/TasksContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
function Addtask() {
  const [value, onChange1] = useState(new Date());
  // const [value1, onChange2] = useState("");
  // const [value1, onChange1] = useState(null);

  const context = useContext(TasksContext);
  const { handlesubmittask } = context;

  const [task, settask] = useState({
    title: "",
    description: "",
    selectedproject: "",
  });
  // const [temp, settemp] = useState(0);
  const onchange = (e) => {
    settask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          value={task.title}
          id="title"
          name="title"
          placeholder="title"
          onChange={onchange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          value={task.description}
          id="description"
          name="description"
          rows="3"
          onChange={onchange}
        ></textarea>
      </div>
      <span
        onClick={() => {
          // onChange1(new Date(0,0,0,0,0,0,0,0,0));
         
          document.getElementById("calenderr").classList.remove("dipnone");
        }}
        className="badge bg-primary hover-cursor"
      >
        Schedule
      </span>

      <button
        style={{
          border: "2px solid red",
          fontWeight: "bold",
          marginLeft: "1.5rem",
          backgroundColor: "#dc3545",
          borderRadius: "9px",
          padding: "3px",
          color:"white"
        }}
        disabled={task.title.length<1}
        className="hover-cursor"
        onClick={() => {
          if(localStorage.getItem('schedule')==="")
          localStorage.setItem('schedule',"");
          else
          localStorage.setItem("schedule", value);
          handlesubmittask(task.title, task.description);
          settask({ title: "", description: "" });
          localStorage.setItem("schedule",new Date());
        }}
      >
        Add Task
      </button>
     

      <div
        className="calendar dipnone"
        id="calenderr"
        
        // onClicklocalStorage.setItem("schedule", value.setHours(5, 30, 0, 0, 0));
      >
        <span
          onClick={() => {
            
            localStorage.setItem("schedule", "");
            document.getElementById("calenderr").classList.add("dipnone");
          }}
          className="badge bg-success hover-cursor m-3"
        >
          No due date
        </span>
        <div
          onClick={() => {
             
            document.getElementById("calenderr").classList.add("dipnone");
          }}
        >
          <Calendar onChange={onChange1} value={value} />
        </div>
      </div>
    </>
  );
}

export default Addtask;
