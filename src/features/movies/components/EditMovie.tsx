

import { useParams } from "react-router";
import type CreateMovie from "../models/movieCreation.module";
import MovieForm from "./MovieForm";
import { type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import type Genre from "../../genres/models/Genre.model";
import type MovieActors from "../models/MovieActors.module";

export default function EditMovie() {
const [model,setModel]=useState<CreateMovie|undefined>(undefined);
    const {id}= useParams();
    const onSubmit:SubmitHandler<CreateMovie>=async (data)=>{
        await new Promise(resolve=>setTimeout(resolve,2000));
        console.log(data);
       }
       useEffect(()=>{
        const timerid=setTimeout(()=>{
            setModel({title:'Spider Man',releaseDate:'2023-06-01',trailer:'my url',poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/500px-Thomas_Edison2.jpg'});
            
        },1000);
        return()=>{
            clearTimeout(timerid);
        }
       },[id]);
       const nonSelected:Genre[]=[
               
               {id:2,name:'Comedy'},]
        const selected:Genre[]=[
            {id:1,name:'Action'},]

            const nonSelectedTheatres=[
        {id:2,name:'PVR Icon',latitude:18.50263298296431,longitude:73.8717670575509}
       ]
       const SelectedTheatres=[
        
           {id:1,name:'City Pride Multiplex',latitude:18.490179245242675 ,longitude:73.85769082519269}
         
        
       ];
        
        const Actors:MovieActors[]=[
                    {id:1,name:"Salman Khan",picture:"https://mir-s3-cdn-cf.behance.net/project_modules/hd/3b618e60298373.5a461919b15fd.jpg",character:"Chulbul Pandey in Dabangg"},
                    {id:2,name:"Shah Rukh Khan",picture:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",character:"Rahul Khanna in Kuch Kuch Hota Hai"},
                ]
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Edit Movie :</h1>
           {model?<MovieForm onSubmit={onSubmit} nonSelectedGenres={nonSelected} selectedGenres={selected} 
                       nonSelectedTheatres={nonSelectedTheatres} selectedTheatres={SelectedTheatres} selectedActors={Actors}
                       />:<Loading/>} 
        </div>
    );
}


