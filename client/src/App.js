// import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
// import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Userdashboard from './components/Userdashboard';
import React,{useEffect} from 'react'
import TaskState from './context/tasks/TaskState';
function App() {
  useEffect(() => {
       
    localStorage.setItem("projectId","61d1719194c87b7ff0486240");//for inbox default
  
 
  
    // eslint-disable-next-line
}, [])
  return (
    <TaskState>
    <Router>
   
   <Routes>
   <Route exact path="/" key="home" element={<Home/>}/>
          {/* <Route exact path="/signup" key="signup" element={<Signup/>}/>
          <Route exact path="/login" key="login" element={<Login />}/> */}
          <Route exact path="/contact" key="contact" element={<Contact/>}/>
      
          <Route exact path="/about"  key="about" element={<About/>}/>
          <Route exact path="/user"  key="user" element={<Userdashboard/>}/>
   </Routes>
   </Router>
   </TaskState>
  );
}

export default App;
