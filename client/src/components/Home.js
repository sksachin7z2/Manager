import React from 'react'
import Navbar from './Navbar';
function Home() {
    return (
        <>
        <Navbar/>
                <div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"75vh",backgroundColor:"GrayText"}}>
            
              
               <h1 className='text-center'> Your Own Reliable <br/> Task and Project Manager</h1> 
             
           <button className='btn btn-primary my-3'>Get Started</button>
             </div>
        </div>
        </>
    )
}

export default Home
