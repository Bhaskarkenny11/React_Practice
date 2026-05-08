import Card from "./components/card"
import logo from "./assets/react.svg"
import logo1 from "./assets/vite.svg"

const App=()=>{
  return (
    <div className="parent">
{/*  
      {Card()} */}
      <Card user='kenny' age={18} img={logo}/>
      <Card user='Amme' img={logo1}/>

    </div>
  )
}
export default App