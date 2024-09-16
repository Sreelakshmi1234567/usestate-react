import React,{useState} from 'react'

function Task() {
    const [count,setcount]=useState(0)
  return (
    <>
    
    <div style={{border:'solid',margin:'200px',paddingBottom:'20px',backgroundColor:'pink',marginLeft:'350px',marginRight:'350px'}}>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+2)} style={{height:'30px',width:'100px'}}>Increase</button><br/><br/>
        <button onClick={()=>setcount(count-1)}style={{height:'30px',width:'100px'}}>Decrease</button>

    </div>
    </>
  )
}
export default Task