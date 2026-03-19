import type CreateGenre from "../models/createGenre.module";
import GenreForm from "./GenreForm";
import { type SubmitHandler } from "react-hook-form";

//import { useNavigate } from "react-router";



// export default function CreateGenre() {
//     const navigation = useNavigate();
// function handleClick() {
//     navigation('/genres');
// }
//     return (
//         <div>
//             <h1>Create Genre</h1>
//             <Button onClick={handleClick}>Send</Button>
//         </div>
//     );
// }

export default function CreateGenre() {
   
   const onSubmit:SubmitHandler<CreateGenre>=async (data)=>{
    await new Promise(resolve=>setTimeout(resolve,2000));
    console.log(data);
   }
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Create Genre</h1>
            <GenreForm onSubmit={onSubmit}/>
        </div>
    );
}


