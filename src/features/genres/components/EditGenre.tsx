import { useParams } from "react-router";
import type CreateGenre from "../models/createGenre.module";
import GenreForm from "./GenreForm";
import { type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

export default function EditGenre() {
    const [model,setModel]=useState<CreateGenre|undefined>(undefined);
    const {id}= useParams();
    const onSubmit:SubmitHandler<CreateGenre>=async (data)=>{
        await new Promise(resolve=>setTimeout(resolve,2000));
        console.log(data);
       }
       useEffect(()=>{
        const timerid=setTimeout(()=>{
            setModel({name:'Action '});
            
        },1000);
        return()=>{
            clearTimeout(timerid);
        }
       },[id]);
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Edit Genre :</h1>
           {model?<GenreForm onSubmit={onSubmit} model={{name:'Action'}}/>:<Loading/>} 
        </div>
    );
}