import React from "react"
import Section1 from "./componenets/section1/Section1"
import Section2 from "./componenets/section2/section2"
const App = () =>{
  const users=[
    {
      img:'https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg',
      intro:'',
      tag:'Satisfied',
      color:'green'

    },
       {
      img:'https://i.pinimg.com/736x/c6/53/71/c653713b69d8ed104340aa5ace9809bb.jpg',
      intro:'',
      tag:'underpaid',
      color:'royalblue'

    },  
     {
      img:'https://i.pinimg.com/736x/d1/d2/fb/d1d2fb4b1278beb8a2b6f62f19714383.jpg',
      intro:'',
      tag:'outstanding',
      color:'brown'

    },   {
      img:'https://i.pinimg.com/736x/45/2f/af/452fafad1b09b4417e1166f9a7087a4d.jpg',
      intro:'',
      tag:'overPaid',
      color:'orange'

    }
  ]
  return (
    <div>
       <Section1 users={users} />
       <Section2/>
    </div>
  )
}
export default App