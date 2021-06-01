import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const About = ()=> {
    useEffect(()=>{
        console.log("About component Mounted")
    },[])
   return (
       <div>
           <h1>About Page</h1>
           <Link to='/'>Home</Link>
       </div>
   )
}
export default About