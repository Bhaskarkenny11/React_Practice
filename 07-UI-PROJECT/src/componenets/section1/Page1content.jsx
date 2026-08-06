import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";
const Page1content =(props)=>{
    return(
        <div className="pb-20 pt-6 flex items-center gap-10 px-18  h-[90vh]">
            <Leftcontent />
            <Rightcontent users={props.users}/>
        </div>
    )
}
export default Page1content