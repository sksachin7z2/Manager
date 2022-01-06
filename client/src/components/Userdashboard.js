import React,{useContext,useEffect,useRef,useState} from 'react'
import inbox from './inbox.png'
import calender from './calendar.png'
import upcoming from './upcoming.png'
import home from './home.png'
import Addtask from './Addtask';

import TasksContext from '../context/tasks/TasksContext';
import Tasks from './Tasks';
import {Link} from 'react-router-dom'
import Addproject from './Addproject'
import CreateProject from './CreateProject'
function Userdashboard() {
        let date=new Date();
            date=date.toDateString()
            const ref=useRef(null)
    const refClose=useRef(null)
    const [note, setnote] = useState({id:"",etitle:"",edescription:""})
           const context = useContext(TasksContext)
           const {visible,handleaddtask,notes,getNote,editNote,getScheduleNote}=context;
    //    console.log(visible);
    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
    const updateNote=(currentnote)=>{
        ref.current.click()
        setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description})
        
    }
    const handleClick=()=>{
        editNote(note.id,note.etitle,note.edescription);
        refClose.current.click()                                         
        // props.showAlert("Updated Successfully","success");
      }
     
      
    useEffect(() => {
       
      localStorage.setItem("projectname","Inbox");
      localStorage.setItem("projectId","61d1719194c87b7ff0486240");
     
      
          getNote();
         
        
          // eslint-disable-next-line
      }, [])
    
    return (
        <div>

            <div className="sidebar">
            
            <div  style={{padding:"3px",borderRadius:"0.3rem",backgroundColor:"#ed8076",position:"absolute",top:"0.45rem",left:"1rem",zIndex:900}}   data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <svg className="menu_icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path></svg>
</div>

<div  style={{zIndex:1055,width:"300px"}} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Manage</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    <div style={{height:"100vh",width:"264px",backgroundColor:"#f4f1f1"}}>
            <div style={{display:"flex",flexDirection:"column",padding:"2rem"}}>
                   <div className='d-flex my-2'> <div><img src={inbox} alt="inbox" /></div>&emsp;
                   <div onClick={()=>{localStorage.setItem("projectId","61d1719194c87b7ff0486240");
                                        getNote();
                                       localStorage.setItem("projectname","Inbox")}}  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                     Inbox
                     </div></div>
                  
                     <div className="d-flex my-2">
                    <div><img src={calender} alt="calender" /></div>&emsp;
                    <div onClick={async()=>{
                      localStorage.setItem("projectname","Today")
                      await getScheduleNote();
                      localStorage.setItem("schedule",new Date().setHours(5,30,0,0,0));
                      localStorage.setItem("projectId","61d1719194c87b7ff0486240");
 
                            // getNote();

                    }}   style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                    Today
                     </div></div>
                    <div className="d-flex my-2"><div><img src={upcoming} alt="upcoming" /></div>&emsp;
                    <div  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                    Upcoming
                     </div></div>
                    
                </div>
                <CreateProject campusId={"offcanvasExample"}/>

            </div>
    </div>
    
  </div>
  
</div>

            </div>
              
            <nav  style={{display:"flex",alignItems:"center",zIndex:100,position:"sticky",top:0,height:"44px",backgroundColor:"#db4c3f"}}>
              
            <Link className='nav-active' to="/"><div style={{marginLeft:"75px",maxWidth:"min-content"}}><img  src={home} alt="home" width="24px" /></div></Link>
            </nav>
            <div   className='d-flex '>
            <div className='mainnav' style={{overflow:"scroll",height:"100vh",width:"289px",backgroundColor:"#f4f1f1"}}>
            <div style={{display:"flex",flexDirection:"column",padding:"2rem"}}>
                   <div className='d-flex my-2'> <div><img src={inbox} alt="inbox" /></div>&emsp;
                   <div onClick={()=>{localStorage.setItem("projectId","61d1719194c87b7ff0486240");
                                        getNote();
                                       localStorage.setItem("projectname","Inbox")}}  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                     Inbox
                     </div></div>
                  
                     <div className="d-flex my-2">
                    <div><img src={calender} alt="calender" /></div>&emsp;
                    <div onClick={async()=>{
                      localStorage.setItem("projectname","Today")
                     await getScheduleNote();
 localStorage.setItem("schedule",new Date().setHours(5,30,0,0,0));
 localStorage.setItem("projectId","61d1719194c87b7ff0486240");
// getNote();

                    }}   style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                    Today
                     </div></div>
                    <div className="d-flex my-2"><div><img src={upcoming} alt="upcoming" /></div>&emsp;
                    <div  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                    Upcoming
                     </div></div>
                </div>
                <Addproject />

            </div>
            <div  style={{position:"sticky",top:0,zIndex:2,height:"100vh",width:"100vw",padding:"2rem 2rem 13rem 2rem",overflow:"scroll"}}>
                    <h3>{localStorage.getItem("projectname")}&emsp;</h3>{date}
                    <hr  />

                    {notes.map((task)=>{
               return <Tasks   key={task._id} task={task} updateNote={updateNote}/>
           })}
                    {/* {scheduletask.map((scheduletask)=>{
               return <Tasks   key={scheduletask._id} task={scheduletask} updateNote={updateNote}/>
           })} */}


                {visible &&<Addtask visible={visible} />}
                {!visible&&<div onClick={handleaddtask} className='d-flex'>
                    <div><i className="fa fa-plus"  aria-hidden="true"></i></div>&emsp;
                    <div className='addtask'>
                     Add Task
                     </div>
                </div>}
                
            </div>
            </div>


            <button ref={ref} type="button" className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div style={{backgroundColor:"rgb(49, 51, 85)",color:"white"}} className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{backgroundColor:"rgb(49, 51, 85)",color:"white"}} className="modal-body">
      <form>
  <div className="mb-3">
    <label  htmlFor="etitle" className="form-label ">Title</label>
    <input type="text" value={note.etitle} className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp"onChange={onchange}/>
    
  </div>
  <div className="mb-3">
  <label htmlFor="edescription" className="form-label  ">Description</label>
    <textarea name="edescription" id="edescription" className="form-control" cols="30" rows="10"  value={note.edescription} onChange={onchange} minLength={2} required/>
   
  </div>
  
  
</form>
      </div>
      <div style={{backgroundColor:"rgb(49, 51, 85)",color:"white"}} className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<2||note.edescription.length<2}type="button" className="btn btn-primary"  onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
       

        </div>

    )
}

export default Userdashboard
