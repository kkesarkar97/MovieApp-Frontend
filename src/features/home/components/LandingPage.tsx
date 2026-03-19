import React from "react";
import MovieList from '../../movies/components/MovieList';
import { useState, useEffect } from 'react';
import type Movie from '../../movies/models/movie.model';


export const LandingPage:React.FC=()=>{
    const [movie,setmovie]=useState<Appstate>({
        movieReleased:[],
        upComingMovies:[]
      });
      useEffect(()=>{
        const movieReleased:Movie[]=[
        {
        id:1,
        title:'Ek Tha Tiger',
        poster:'https://upload.wikimedia.org/wikipedia/en/2/2d/Ek_Tha_Tiger_theatrical_poster.jpg'
      },
      {
        id:2,
        title:'Dabangg 2',
        poster:'https://upload.wikimedia.org/wikipedia/en/9/93/DABANGG_2_Poster.jpg'
      }
      ];
    
    
      const upComingMovies:Movie[]=[{
        id:1,
        title:'Border 2',
        poster:'https://upload.wikimedia.org/wikipedia/en/2/26/Border_2_Poster.jpg'
      },
      {
        id:2,
        title:`'O'Romeo`,
        poster:'https://upload.wikimedia.org/wikipedia/en/8/86/O%27Romeo_film_poster.jpg'
      }];
      
      setTimeout(() => {
        setmovie({
          movieReleased:movieReleased,
          upComingMovies:upComingMovies
        });
      }, 1000);
      },[]);
      
    return (
        <div>
         <h1 className="font-serif text-2xl text-white italic">Released Movies</h1>
   <MovieList movies={movie.movieReleased} />
   <hr></hr>
   <h1 className="font-serif text-2xl text-white italic">Upcoming Movies</h1>
   <MovieList movies={movie.upComingMovies} />
        </div>
    );
}

export interface Appstate{
  movieReleased:Movie[];
  upComingMovies:Movie[];
}