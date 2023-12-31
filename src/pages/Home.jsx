import React from 'react'
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    function handleContact() {
        navigate('/contact')
      }
  return (
    <div>
     <h1>This is about home Page</h1>
    <Link to="about">Click to view our about page</Link>
    <br/>
      <Link to="contact">Click to view our contact page</Link>
      <div>
      <button onClick={()=>navigate("/about")}>About</button>
      <button onClick={handleContact}>Contact</button>
      </div>
    
    </div>
   
  )
}

export default Home