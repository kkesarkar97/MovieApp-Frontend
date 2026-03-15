
import { useParams } from 'react-router';
import type ActorCreation from './../models/ActorCreation';
import {  useEffect, useState } from 'react';
import { type SubmitHandler } from 'react-hook-form';
import ActorForm from './ActorForm';
import Loading from '../../../components/Loading';
export default function EditActors() {
    debugger;
    const {id}=useParams();
    const [model,setmodel]=useState<ActorCreation|undefined>(undefined);

    useEffect(()=>{
        const timerid=setTimeout((
            
        )=>{
            setmodel({
                name:'Tom Holland',
                dateOfBirth:'2000-01-01',
                picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/500px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
            });
        },1000);
        return()=>{
            clearTimeout(timerid);
        }

    },[id]);
    const onSubmit:SubmitHandler<ActorCreation>=async (data)=>{
            await new Promise(resolve=>setTimeout(resolve,2000));
            console.log(data);
           }
    return (
        <div>
            <h1>Edit Actors</h1>
            {model?<ActorForm onSubmit={onSubmit} model={model}/>:<Loading/>}
        </div>
    );
}