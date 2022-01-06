import React,{useContext,useState} from 'react'
import TasksContext from '../context/tasks/TasksContext'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Addtask() {
  const [value, onChange1] = useState(new Date());

  const context = useContext(TasksContext);
  const {handlesubmittask}=context;
  
const [task, settask] = useState({title:"",description:"",selectedproject:""});

const onchange=(e)=>{
  settask({...task,[e.target.name]:e.target.value})
}
    return (
      <>
      <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" value={task.title} id="title" name="title" placeholder="title" onChange={onchange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" value={task.description} id="description" name="description" rows="3" onChange={onchange}></textarea>
    </div>
    <span  onClick={()=>{document.getElementById('calenderr').classList.remove('dipnone')}} className="badge bg-primary hover-cursor">Schedule</span>
    <div onClick={()=>{
                      document.getElementById('calenderr').classList.add('dipnone')}}    className='calendar dipnone' id='calenderr'><Calendar
        
        onChange={onChange1}
        value={value}
      /></div>
    <button className='btn btn-primary' onClick={()=>{localStorage.setItem('schedule',value.setHours(5,30,0,0,0));
                handlesubmittask(task.title,task.description)
                                                      settask({title:"",description:""})  }}>Add Task</button>
    </>
    )
}

export default Addtask
