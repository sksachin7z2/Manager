import React,{useContext,useState} from 'react'
import TasksContext from '../context/tasks/TasksContext'
function Addtask() {
  const context = useContext(TasksContext);
  const {handlesubmitproject}=context;
  
const [project, setproject] = useState({name:""});

const onchange=(e)=>{
  setproject({...project,[e.target.name]:e.target.value})
}
    return (
      <>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" value={project.name} id="name" name="name" placeholder="name" onChange={onchange}/>
    </div>
    
    <button className='btn btn-primary' onClick={()=>{handlesubmitproject(project.name)
                                                      setproject({name:""})  }}>Create Project</button>

                                                      
    </>
    )
}

export default Addtask
