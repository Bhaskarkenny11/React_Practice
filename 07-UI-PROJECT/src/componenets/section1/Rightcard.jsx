import Rightcardcontent from "./Rightcardcontent"

const Rightcard=(props)=>{
    console.log(props);
    
    return(
        <div className="h-full shrink-0  overflow-hidden relative w-70 rounded-4xl">
            <img className="h-full w-full object-cover" src={props.img} alt="" />

        <Rightcardcontent tag={props.tag} id={props.id} color={props.color} />

        </div>
    )
};
export default Rightcard