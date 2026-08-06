
import Rightcard from "./Rightcard"
const Rightcontent=(props)=>{
    console.log(props.users)
    return(
        <div id='right' className="h-full overflow-x-auto flex flex-nowrap gap-10 w-[70%] p-5">
        {props.users.map(function(elem,idx)
        {
            return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
        })}
        </div>
    )
};
export default Rightcontent