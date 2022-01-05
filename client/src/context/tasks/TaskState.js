import React,{useState} from "react";
import noteContext from "./TasksContext";

const NoteState=(props)=>{
    // const host="https://inotebook-prac.herokuapp.com";
    const host="http://localhost:5000";
   const notesInitial=[
   
  ]
    const [loading, setLoading] = useState(false);
    const [visible, setvisible] = useState(false);
    const [proname, setproname] = useState("");
  const [progress, setProgress] = useState(0);

const [notes, setNotes] = useState(notesInitial);
// const [scheduletask, setscheduletask] = useState(notesInitial);
const [project, setProject] = useState(notesInitial);
//get a note
const getNote=async()=>{
  //api call
   
  setLoading(true);
  const response = await fetch(`${host}/api/task/fetchalltasks`, {
     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
     headers: {
       'Content-Type': 'application/json',
      //  "auth-token":localStorage.getItem('token')
      'projectId':localStorage.getItem('projectId')
     }
    
     
   });
 //   const json =response.json(); 
     const json =await response.json()
    // console.log(json);
    setNotes(json)
    
    setLoading(false);
 }
const getScheduleNote=async()=>{
  //api call
   
  setLoading(true);
  const response = await fetch(`${host}/api/task/fetchallduetasks`, {
     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
     headers: {
       'Content-Type': 'application/json',
      //  "auth-token":localStorage.getItem('token')
      'schedule':localStorage.getItem('schedule'),
      
     }
    
     
   });
 //   const json =response.json(); 
     const json =await response.json()
    // console.log(json);
    setNotes(json)
    
    setLoading(false);
 }

//Add a note
const addNote=async(title,description)=>{
 //api call
    
 setLoading(true);
 const response = await fetch(`${host}/api/task/addtask`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      'projectId':localStorage.getItem('projectId'),
      // "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify({title,description})
    
  });

  const json = await response.json(); 


  setNotes(notes.concat(json))
  setLoading(false);
}

//delete a note
const deleteNote=async(id)=>{
   
  setLoading(true);
    const response = await fetch(`${host}/api/task/deletetask/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        'Content-Type': 'application/json',
        // "auth-token":localStorage.getItem('token')
        // 'projectId':localStorage.getItem('projectId')
      }
    });
    const json =await response.json(); 
    console.log(json)
    const newNotes= notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
    setLoading(false);
}
//Edit a Note
const editNote=async(id,title,description)=>{
    //api call
    
    setLoading(true);
    const response = await fetch(`${host}/api/task/updatetask/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
          'Content-Type': 'application/json',
          // "auth-token":localStorage.getItem('token')
          // 'projectId':localStorage.getItem('projectId')
        },
       
        body: JSON.stringify({title,description})
      });
      const json =await response.json(); 
      console.log(json);

        let newNotes=JSON.parse(JSON.stringify(notes))
    //logic to edit
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id===id)
        {
          newNotes[index].title=title;
          newNotes[index].description=description;
          
          break;
        }
       
    }
      setNotes(newNotes)
      setLoading(false);
}

const deleteUser=async(id)=>{
  setProgress(10);
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
    }
   
    
  });
 let json =await response.json();
  json=JSON.stringify(json);
  setProgress(50);
 if(json!=='[]'){
  const response1 = await fetch(`${host}/api/notes/deleteallnote`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token'),
      'projectId':localStorage.getItem('projectId')
    }
  });
  const json1 =await response1.json(); 
  console.log(json1);
}
setProgress(70);
  const response2 = await fetch(`${host}/api/auth/deleteuser/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
    }
  });
  const json2 =await response2.json(); 
  console.log(json2);
 
  setProgress(100);
}
const handleaddtask=()=>{
    setvisible(true);
}
const handlesubmittask=(title,description)=>{
    setvisible(false);
    addNote(title,description)
}
const handlesubmitproject=(name)=>{
    setvisible(false);
    addProject(name)
}
const fetchtaskstate=()=>{
  setNotes(notes);
}
//project states

const getProject=async()=>{
  //api call
   
  setLoading(true);
  const response = await fetch(`${host}/api/project/fetchallproject`, {
     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
     headers: {
       'Content-Type': 'application/json',
      //  "auth-token":localStorage.getItem('token')
      // 'projectId':localStorage.getItem('projectId')
     }
    
     
   });
 //   const json =response.json(); 
     const json =await response.json()
    // console.log(json);
    setProject(json)
    
    setLoading(false);
 }

//Add a note
const addProject=async(name)=>{
 //api call
 setproname(name);
 setLoading(true);
 const response = await fetch(`${host}/api/project/addproject`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      // 'projectId':localStorage.getItem('projectId'),
      // "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify({name})
    
  });

  const json = await response.json(); 


  setProject(project.concat(json))
  setLoading(false);
}

//delete a note
// const deleteproject=async(id)=>{
   
//   setLoading(true);
//     const response = await fetch(`${host}/api/project/deleteproject/${id}`, {
//       method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     
//       headers: {
//         'Content-Type': 'application/json',
//         // "auth-token":localStorage.getItem('token')
//         // 'projectId':localStorage.getItem('projectId')
//       }
//     });
//     const json =await response.json(); 
//     console.log(json)
//     const newproject= project.filter((pro)=>{return pro._id!==id});
//     setProject(newproject);
//     setLoading(false);
// }
//Edit a Note
const editProject=async(id,name)=>{
    //api call
    setproname(name);
    setLoading(true);
    const response = await fetch(`${host}/api/project/updateproject/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
          'Content-Type': 'application/json',
          // "auth-token":localStorage.getItem('token')
          // 'projectId':localStorage.getItem('projectId')
        },
       
        body: JSON.stringify({name})
      });
      const json =await response.json(); 
      console.log(json);

        let newProject=JSON.parse(JSON.stringify(project))
    //logic to edit
    for (let index = 0; index < newProject.length; index++) {
        const element = newProject[index];
        if(element._id===id)
        {
          newProject[index].name=name;
          
          break;
        }
       
    }
      setProject(newProject)
      setLoading(false);
}

const deleteProject=async(id)=>{
  setProgress(10);
  const response = await fetch(`${host}/api/task/fetchalltasks`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      // "auth-token":localStorage.getItem('token')
      'projectId':localStorage.getItem('projectId')
    }
   
    
  });
 let json =await response.json();
  json=JSON.stringify(json);
  setProgress(50);
 if(json!=='[]'){
  const response1 = await fetch(`${host}/api/task/deletealltasks`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      // "auth-token":localStorage.getItem('token'),
      'projectId':localStorage.getItem('projectId')
    }
  });
  const json1 =await response1.json(); 
  
    setNotes(notesInitial);
  console.log(json1);
}
setProgress(70);
  const response2 = await fetch(`${host}/api/project/deleteproject/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      // "auth-token":localStorage.getItem('token')
    }
  });
  const json2 =await response2.json(); 
  console.log(json2);
  const newProjects= project.filter((pro)=>{return pro._id!==id});
    setProject(newProjects);
    
  setProgress(100);
}


    
    return (
        <noteContext.Provider value={{project,proname,notes,addNote,getNote,getScheduleNote,deleteNote,editNote,deleteUser,getProject,addProject,editProject,deleteProject,loading,progress,visible,handleaddtask,handlesubmittask,handlesubmitproject,fetchtaskstate}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
