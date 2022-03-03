import React, { useState } from 'react'


const App=()=>{

  let Time=new Date().toLocaleTimeString();

  const [ctime,setUtime]=useState(Time);
  
  
  const UpdateTime=()=>{
    Time=new Date().toLocaleTimeString();
    setUtime(Time)
  }

  setInterval(UpdateTime,1000)
  


  return(
    <>
    <div className="main">
      <h1>Digital Clock Project</h1>
      <h1 className='time_part'>{ctime}</h1>
    </div>
    </>
  )
}

export default App;