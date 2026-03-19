import type { SubmitHandler } from "react-hook-form";
import type { TheatreCreation } from "../models/TheatreCreation";
import TheatreForm from "./TheatreForm";

export default function CreateTheater() {
    
       const onSubmit:SubmitHandler<TheatreCreation>=async (data)=>{
        await new Promise(resolve=>setTimeout(resolve,2000));
        console.log(data);
       }
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Create Theater</h1>
            <TheatreForm onSubmit={onSubmit} />
        </div>
    );
}