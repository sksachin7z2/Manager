import React,{useContext} from 'react'
import TasksContext from '../context/tasks/TasksContext'
function Tasks(props) {
  const context = useContext(TasksContext);
  const {deleteNote}=context;

    return (
        <div>
            <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.task.title}</h5>
   
    <p className="card-text">{props.task.description}</p>
   
    
    <i onClick={()=>{deleteNote(props.task._id)}} className="far fa-check-circle"></i>
    <i onClick={()=>{props.updateNote(props.task)}} className="fas fa-edit mx-3"></i>
  </div>
</div>
<hr />
        </div>
    )
}

export default Tasks
