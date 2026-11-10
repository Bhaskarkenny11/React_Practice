import  { useState } from "react";
const App = () =>{
  
  const [num,setNum]=useState(0);
  const [msg,setMsg]=useState('no changes yet')
  const [arrr,setArrr]=useState([10,20,30])
  const [objc,setObjc]=useState({user:'tiger',age:10})
  const [n,setn]=useState(10)
  const [b,setb]=useState(0)
  const [user,setUser]=useState({name:"kenny",age:25})

  function increaseb(){
    setb(b+25)
  }

  function increasenum(){
  //const newnum=num+1 this example for maintiaing same variable and not creating other varible newnum=num+1 
    setNum(num+1)
    setMsg(`increased by ${num+1}`)
  }
function decreasenum(){
  const newnum=num-1
  setNum(newnum)
   setMsg(`decreased by ${newnum}`)
}

const increaseby5=()=>{
  const newnum=num+5
  setNum(newnum)
  setMsg(`increased by ${newnum}`)
} 

const clicked=()=>{
  // const newarr=[...arrr] //arrary destructuring ...[]
  // newarr.push(12)
  setArrr([30,40,50])
}

const click=()=>{
  // setObjc(prev=>({...prev, user:'lion'}))
    setObjc({...objc,user:'lion'})
}
  function objupdate(){
     setUser({...user,age:26})
    //setUser(prev=>({...prev,age:26}))
  }


const bulk=()=>{  
  setn(prev=>(prev+1))
  // setn(prev=>(prev+1))
}
  return(
    <div>
       <h1>{num}</h1>
      <button onClick={increasenum}> increase</button>
      <button onClick={decreasenum}> decrease</button>
       <button onClick={increaseby5}>increase by 5</button>
       {<p>{msg}</p>}
       <div>
        <div>
          <h1>{b}</h1>
           <button onClick={increaseb}>click to change b</button>
        </div>
<>
    <h1>{user.name},{user.age}</h1>
         <button onClick={objupdate}>click to change user details</button>
</>
     
      
        <h1>{arrr}</h1>
        <button onClick={clicked}>click</button>
       </div>

        <div>
        <h1>{objc.user},{objc.age}</h1>
        <button onClick={click}>click</button>
       </div>
         <div>
        <h1>{n}</h1>
        <button onClick={bulk} >click</button>
       </div>
    </div>
  );

};
export default App