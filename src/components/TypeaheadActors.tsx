import { Typeahead } from "react-bootstrap-typeahead";
import type MovieActors from "../features/movies/models/MovieActors.module";
import type { Option } from "react-bootstrap-typeahead/types/types";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useState } from "react";



export default function TypeaheadActors(props:TypeaheadActorsProps)
{
    const [draggable,setdraggable]=useState<MovieActors|undefined>(undefined);

    function dragStart(actor:MovieActors)
    {
        setdraggable(actor);
    }

    function dragOver(actor:MovieActors)
    {
        if(!draggable||actor.id===draggable.id)return;
        const actors=[...props.actors];
        const fromIndex=actors.findIndex(ca=>ca.id===draggable.id);
        const toIndex=actors.findIndex(ca=>ca.id===actor.id);
        if(fromIndex!==-1||toIndex!==-1)
        {
            [actors[fromIndex],actors[toIndex]]=[actors[toIndex],actors[fromIndex]];
            props.onAdd(actors);
        }
    }

    const selection:MovieActors[]=[];
      
          const actors:MovieActors[]=[
                  {id:1,name:"Salman Khan",picture:"https://mir-s3-cdn-cf.behance.net/project_modules/hd/3b618e60298373.5a461919b15fd.jpg",character:"Chulbul Pandey in Dabangg"},
                  {id:2,name:"Shah Rukh Khan",picture:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",character:"Rahul Khanna in Kuch Kuch Hota Hai"},
              ]
    return(
        <>
            <label htmlFor="Actors">Actors</label>
            <Typeahead options={actors} filterBy={['name']} labelKey={(option:Option)=>{
                const actor=option as MovieActors;
                return actor.name;
            }} placeholder="Write the name of the actor..." minLength={2} 
            selected={selection}  
            caseSensitive={false} 
            flip={true}
            renderMenuItemChildren={(option:Option)=>{
                const actor=option as MovieActors;
                return(
                    <>
                        <img alt='Actors image' src={actor.picture} style={{height:'64px',width:'64px',marginRight:'10px'}}></img><span>{actor.name}</span>
                    </>
                );
            }}  
            
            onChange={(actors: Option[])=>{
                const selectedActors=actors[0] as MovieActors;
               
                if(props.actors.findIndex(ca=>ca.id===selectedActors.id)===-1)
                {
                    selectedActors.character='';
                    props.onAdd([...props.actors,selectedActors]);
                }

            }}
            ></Typeahead>
            <div className="list-group">
                {props.actors.map(item=>
                    <li draggable={true} onDragStart={()=>dragStart(item)}
                    onDragOver={()=>dragOver(item)}
                    key={item.id} className="list-group-item d-flex align-items-center ">
                       <div style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }}>
                            <img src={item.picture} style={{width: "60px", height: "60px"}} ></img>
                       </div>
                       <div style={{width:"150px",marginLeft:'1rem'}}>
                        {item.name}
                       </div>
                       <div className="flex-grow-1 mx-3">
                        <input type='text' className="form-control" placeholder="Character" value={item.character} onChange={(e)=>props.onChange(item.id,e.target.value)} ></input>
                       </div>
                       <div className="ms-auto">
                        <button onClick={()=>props.onRemove(item)} >X</button>
                        </div>
                    </li>

                )}
            </div>
        </>
    );
}

interface TypeaheadActorsProps{
    actors:MovieActors[];
    onAdd(actors:MovieActors[]):void;
    onRemove(actor:MovieActors):void;
    onChange(id:number,character:string):void;
}