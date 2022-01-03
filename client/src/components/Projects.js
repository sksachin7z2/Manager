import React,{useContext} from 'react'
import TasksContext from '../context/tasks/TasksContext'
function Projects(props) {
  const context = useContext(TasksContext);
  const {deleteProject}=context;

    return (
        <div>
            <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.project.name}</h5>
   
    
    <i onClick={async()=>{await deleteProject(props.project._id)}} className="fas fa-trash"></i>
    <i onClick={()=>{props.updateProject(props.project)}} className="fas fa-edit mx-3"></i>
  </div>
</div>
<hr />
        </div>
    )
}

export default Projects
