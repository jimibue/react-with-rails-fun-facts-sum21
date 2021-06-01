import './App.css';
import Facts from './components/Facts';
import React, {useEffect} from 'react'

function AppFacts() {
  useEffect(()=>{
    console.log("AppFacts component Mounted")
},[])
  return (
    <div className="App">
      <Facts />
    </div>
  );
}

export default AppFacts;
