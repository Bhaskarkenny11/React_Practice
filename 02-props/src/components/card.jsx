const card=(props)=>{
  console.log(props)
  return (
    
      <div className="card">
        {/* <img src="C:\Users\BHASKAR\REACT\02-props\src\assets\react.svg" alt="" /> */}
       <div>
        <img src={props.img} alt="" />
      </div>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
        <button> View Profile</button>
      </div>

  )
}
export default card