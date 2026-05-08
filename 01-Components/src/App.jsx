// import React from "react"; // comment library if not used
import Card from './components/card'
import Nav from "./components/Nav";
const App=()=>{
  return (
    <div>
      {Nav()}
      {Card()}
      <Card/>
    </div>
  )
}
export default App