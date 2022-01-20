import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
import Alert from './Alert';

// import Spinner from './Spinner'
const Login = (props) => {
        const [credentials, setcredentials] = useState({email:"",password:""})
        let navigate=useNavigate();
        // const [loading, setLoading] = useState(false);
        const [alert, setAlert] = useState(null)
    const host=props.host;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // setLoading(true);
        localStorage.removeItem("token");
        // localStorage.removeItem("userId");
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
           
            headers: {
              'Content-Type': 'application/json'
             
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
            
          });
          const json =await response.json(); 
          // console.log(json);
          if(json.success)
          {
              //redirect
              localStorage.setItem('token',json.authToken);
              // localStorage.setItem('userId',json.userId);
            //   setLoading(false);
              navigate('/user');
              // showAlert("Logged in Successfully","success");
          }
          else{
           showAlert("Invalid Credential","danger");
            // setLoading(false);
          }
          
    }
    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },2000);
    }
    return (
      <>
      <Navbar/>
      <Alert alert={alert}/>
        <div className="app1">
          {/* {loading&&<Spinner/>} */}
           <form onSubmit={handleSubmit}>
  <div className="form-group my-3">
    <label className='darkmode ' htmlFor="email">Email address</label>
    <input type="email" value={credentials.email} className="form-control" id="email" name="email" aria-describedby="emailHelp"onChange={onchange}/>
    
  </div>
  <div className="form-group my-3">
    <label className='darkmode ' htmlFor="password">Password</label>
    <input type="password"  value={credentials.password}className="form-control" id="password" name="password" onChange={onchange}/>
  </div>
  <div className='text-center'>
  <button  type="submit" className="btn btn-primary my-3 ">Submit</button></div>
</form>
        </div>
        </>
    )
}

export default Login
