import  type ActorCreation  from "../models/ActorCreation";
import { type SubmitHandler } from "react-hook-form";
import ActorForm from "./ActorForm";

export default function CreateActors() {
    
       const onSubmit:SubmitHandler<ActorCreation>=async (data)=>{
        await new Promise(resolve=>setTimeout(resolve,2000));
        console.log(data);
       }
    return (
        <div>
            <h1>Create Actors</h1>
            <ActorForm onSubmit={onSubmit}/>
        </div>
    );
}