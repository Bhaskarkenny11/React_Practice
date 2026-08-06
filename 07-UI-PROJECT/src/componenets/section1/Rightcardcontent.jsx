
const Rightcardcontent=(props)=>{
    console.log(props)
return(
    
     <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
                    <h2 className="bg-white rounded-full text-xl h-10 w-10 flex justify-center items-center font-bold">
                        {props.id+1}
                    </h2>
                    <div className="font-semibold">
                        <p className="text-white mb-10 text-shadow-2xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam dolor quae tenetur, voluptates placeat!</p>
                        <div className="flex justify-between">
                            <button  style={{backgroundColor:props.color}} className="text-white px-7 py-2  rounded-full items-center font-semibold">{props.tag}</button>
                            <button style={{backgroundColor:props.color}}  className="text-white px-4 py-3  rounded-full items-center font-semibold"> <i className="ri-arrow-right-line text-white
                            "></i></button>
                        </div>
                    </div>
    </div>

)
} ;
export default Rightcardcontent