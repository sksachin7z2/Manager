import React,{useContext,useRef,useState,useEffect} from 'react'
import downarrow from './down-arrow.png'
import TasksContext from '../context/tasks/TasksContext';

// import CreateProject from './CreateProject'
import Projects from './Projects'
function Addproject() {
        useEffect(() => {
            getProject();
             // eslint-disable-next-line
        }, [])
    const ref=useRef(null)
    const refClose=useRef(null)
    const [pro, setpro] = useState({name:""})
    const handleClick=()=>{
            addProject(pro.name)
            refClose.current.click();
    }
    const addrotate=()=>{
        var a=document.getElementById('rotatable');
        if(a.classList.contains('rotate'))
        a.classList.remove('rotate');
        else{
            a.classList.add('rotate')
        }
    }
    const onchange=(e)=>{
        setpro({...pro,[e.target.name]:e.target.value})
    }
    const handleaddpro=()=>{
            ref.current.click();

    }
    const context = useContext(TasksContext)
    const {project,addProject,getProject}=context;
    return (
        <div>
            <div  style={{display:"flex"}}>
                
                <a onClick={addrotate} style={{textDecoration:"none",paddingLeft:"2rem"}}   data-bs-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample">
                <img id='rotatable'  src={downarrow} alt="down" width="10%"/>
                 <b> Projects </b>
                </a>
                <div><i onClick={handleaddpro} className="fas fa-plus btnp"></i></div>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                {project.map((proj)=>{
               return <Projects  key={proj._id} project={proj} />
           })}
                </div>
              </div>
              

              <button ref={ref} type="button" className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div style={{backgroundColor:"rgb(49, 51, 85)",color:"white"}} className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Create Project</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{backgroundColor:"rgb(49, 51, 85)",color:"white"}} className="modal-body">
      <form>
  <div className="mb-3">
    <label  htmlFor="name" className="form-label ">Name</label>
    <input type="text" value={pro.name} className="form-control" id="name" name="name" onChange={onchange}/>
    
  </div>
  
  
  
</form>
      </div>
      <div style={{backgroundColor:"rgb(49, 51, 85)",color:"white"}} className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={pro.name.length<2}type="button" className="btn btn-primary"  onClick={handleClick}>Create</button>
      </div>
    </div>
  </div>
</div>
            

               
        </div>
    )
}

export default Addproject
