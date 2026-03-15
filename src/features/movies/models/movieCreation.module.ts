import type MovieActors from "./MovieActors.module";

export default interface MovieCreation
{
    title:string;
    releaseDate:string;
    trailer?:string;
    poster?:File | string;
    genresIds?:number[];
    threatreIds?:number[];
    actors?:MovieActors[];
}