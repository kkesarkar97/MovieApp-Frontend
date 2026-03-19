import type Genre from "../../genres/models/Genre.model";
import type MovieCreation from "../models/movieCreation.module";
import MovieForm from "./MovieForm";
import { type SubmitHandler } from "react-hook-form";


export default function CreateMovie() {
    const onSubmit:SubmitHandler<MovieCreation>=async (data)=>{
        await new Promise(resolve=>setTimeout(resolve,2000));
        console.log(data);
       }

       const nonSelected:Genre[]=[
        {id:1,name:'Action'},
        {id:2,name:'Comedy'},]
       const nonSelectedTheatres=[
        {id:1,name:'City Pride Multiplex',latitude:18.490179245242675 ,longitude:73.85769082519269},
        {id:2,name:'PVR Icon',latitude:18.50263298296431,longitude:73.8717670575509}
       ]
       
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Create Movie</h1>
            <MovieForm onSubmit={onSubmit} nonSelectedGenres={nonSelected} selectedGenres={[]} 
            nonSelectedTheatres={nonSelectedTheatres} selectedTheatres={[]} selectedActors={[]}
            />
        </div>
    );
}