import type MovieCreation from '../models/movieCreation.module';
import * as yup from 'yup';
import firstLetterUpperCase from '../../../validations/firstLetterUpperCase';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import SelectImage from '../../../components/SelectImage/SelectImage';
import { NavLink } from 'react-router';
import  MultipleSelection from '../../../components/MultipleSelection/MultipleSelector';
import type Genre from '../../genres/models/Genre.model';
import type MultipleSelector from '../../../components/MultipleSelection/Multiple.module';
import { useState } from 'react';
import type Theatre from '../../theaters/models/Theatre.module';
import TypeaheadActors from '../../../components/TypeaheadActors';
import type MovieActors from '../models/MovieActors.module';


export default function MovieForm(props:MovieFormProps) {
    const [NonSelectedGenres,setNonSelectedGenres]=useState(toMultipleSelector(props.nonSelectedGenres));
    
    const [SelectedGenres,setSelectedGenres]=useState(toMultipleSelector(props.selectedGenres));
    
    const [NonSelectedTheatres,setNonSelectedTheatres]=useState(toMultipleSelector(props.nonSelectedTheatres));
    
    const [SelectedTheatres,setSelectedTheatres]=useState(toMultipleSelector(props.selectedTheatres));
    
    const [SelectedActors,setSelectedActors]=useState(props.selectedActors);

    const {register,handleSubmit,setValue,formState:{isSubmitting,errors,isValid}}=
    useForm<MovieCreation>({
        resolver:yupResolver(validationRules),
        mode:'onChange',
        defaultValues:{title:'',releaseDate:''}
    });

    function toMultipleSelector(array:{id:number,name:string}[]):MultipleSelector[]
    {
        return array.map(value=>{
           return {
            key:value.id,
            description:value.name
           }
        })
    }
    const onSubmit:SubmitHandler<MovieCreation>= data=>{
        data.genresIds=SelectedGenres.map(value=>value.key);
        data.threatreIds=SelectedTheatres.map(value=>value.key);
        data.actors=SelectedActors;
        return props.onSubmit(data);
    }
    
    

    const currentImageUrl:string|undefined=typeof props.model?.poster==='string'?props.model.poster:undefined;
    return(<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor='title'>Title</label>
                <input id="title" autoComplete="off" {...register('title')} className="form-control" />
                {errors.title && <div className="text-danger">{errors.title.message}</div>}
            </div>
            <div className="form-group mt-2">
                <label htmlFor='releaseDate'>Release Date</label>
                <input id="releaseDate" type='date' {...register('releaseDate')} className="form-control" />
                {errors.releaseDate && <div className="text-danger">{errors.releaseDate.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor='trailer'>Trailer</label>
                <input id="trailer" autoComplete="off" {...register('trailer')} className="form-control" />
            </div>
            <SelectImage displayName='Select Image'  imageUrl={currentImageUrl} selectedImage={image=>setValue('poster',image)} />
            <div className='form-group'>
                <label htmlFor='genres'>Genres</label>
                <MultipleSelection selected={SelectedGenres} nonSelected={NonSelectedGenres} onChange={(selected,nonSelected)=>{
                    setNonSelectedGenres(nonSelected);
                    setSelectedGenres(selected);
                }} />
            </div>
            <div className='form-group'>
                <label htmlFor='theatres'>Theatres</label>
                <MultipleSelection selected={SelectedTheatres} nonSelected={NonSelectedTheatres} onChange={(selected,nonSelected)=>{
                    setNonSelectedTheatres(nonSelected);
                    setSelectedTheatres(selected);
                }} />
            </div>
            <div className='form-group'>
                <TypeaheadActors actors={SelectedActors}  onAdd={(actors)=>{ 
                    setSelectedActors(actors);
                    setValue('actors',actors);
                }} onRemove={(actor)=>{
                    const actors=SelectedActors.filter(ca=>ca!=actor);
                    setSelectedActors(actors);
                    setValue('actors',actors);
                }} onChange={(id,character)=>{
                    const index=SelectedActors.findIndex(x=>x.id==id);
                    const actors=[...SelectedActors];
                    actors[index].character=character;
                    setSelectedActors(actors);
                    setValue('actors',actors);
                }}/>
            </div>
            <div className="mt-2">
                <button type="submit" disabled={!isValid||isSubmitting} className="btn btn-primary">{isSubmitting?'Sending...':'Send'}</button>
                <NavLink className="btn btn-secondary ms-2" to="/movies">Cancel</NavLink>
            </div>
        </form>
       </>);


}

const validationRules = yup.object({
    title: yup.string().required('The title is required').test(firstLetterUpperCase()),
    releaseDate: yup.string().required('The release date is required')
    
});

interface MovieFormProps
{
    model?:MovieCreation;
    onSubmit(movieCreation:MovieCreation):void;
    nonSelectedGenres:Genre[];
    selectedGenres:Genre[];
    nonSelectedTheatres:Theatre[];
    selectedTheatres:Theatre[];
    selectedActors:MovieActors[];
    

}