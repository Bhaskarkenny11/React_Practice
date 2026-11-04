import React from "react";
const App=()=>{
  function inputchanging(elem){
   console.log(elem)
  }
  return (
    <div>
      <input onChange={(elem)=>{
          inputchanging(elem.target.value)
      }
        
      } type="text" placeholder="enter"/>  
    {/* <input onChange={()=>{ console.log('typing')}} type="text" placeholder="enter"/>   //same arrow function */}

      <button> submit
      </button>
    </div>
  )
}
export default App