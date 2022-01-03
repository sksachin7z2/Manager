import React,{useContext,useEffect} from 'react'
import inbox from './inbox.png'
import calender from './calendar.png'
import upcoming from './upcoming.png'
import home from './home.png'
import Addtask from './Addtask';
import TasksContext from '../context/tasks/TasksContext';
import Tasks from './Tasks';
import {Link} from 'react-router-dom'
function Userdashboard() {
        let date=new Date();
            date=date.toDateString()
            
           const context = useContext(TasksContext)
           const {visible,handleaddtask,notes,getNote}=context;
    //    console.log(visible);
    useEffect(() => {
       
          getNote();
        
       
        
          // eslint-disable-next-line
      }, [])
    
    return (
        <div>
            <nav style={{display:"flex",alignItems:"center",zIndex:100,position:"sticky",top:0,height:"8vh",backgroundColor:"#db4c3f"}}>
            <Link to="/"><img style={{marginLeft:"10vw"}} src={home} alt="home" width="5%" /></Link>
            </nav>
            <div  className='d-flex'>
            <div style={{overflow:"scroll",height:"100vh",width:"25vw",backgroundColor:"#f4f1f1"}}>
            <div style={{display:"flex",flexDirection:"column",padding:"2rem"}}>
                   <div className='d-flex my-2'> <div><img src={inbox} alt="inbox" /></div>&emsp;
                   <div  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                     Inbox
                     </div></div>
                   <div className='d-flex my-2'> <div><img src={inbox} alt="inbox" /></div>&emsp;
                   <div  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                     Inbox2
                     </div></div>
                     <div className="d-flex my-2">
                    <div><img src={calender} alt="calender" /></div>&emsp;
                    <div  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                    Today
                     </div></div>
                    <div className="d-flex my-2"><div><img src={upcoming} alt="upcoming" /></div>&emsp;
                    <div  style={{fontWeight:"bold",marginTop:"auto"}} className='addtask'>
                    Upcoming
                     </div></div>
                </div>
            </div>
            <div  style={{position:"sticky",top:0,zIndex:2,height:"100vh",width:"75vw",padding:"2rem 2rem 13rem 2rem",overflow:"scroll"}}>
                    <h3>Inbox&emsp;</h3>{date}
                    <hr  />

                    {notes.map((task)=>{
               return <Tasks  key={task._id} task={task}/>
           })}

                {visible &&<Addtask visible={visible} />}
                {!visible&&<div onClick={handleaddtask} className='d-flex'>
                    <div><i className="fa fa-plus"  aria-hidden="true"></i></div>&emsp;
                    <div className='addtask'>
                     Add Task
                     </div>
                </div>}
                
            </div>
            </div>
        </div>
    )
}

export default Userdashboard
