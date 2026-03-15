import CreateGenre from "./features/genres/components/CreateGenre";
import EditGenre from "./features/genres/components/EditGenre";
import IndexGenres from "./features/genres/components/IndexGenres";
import { LandingPage } from "./features/home/components/LandingPage";
import { Routes, Route } from "react-router";
import CreateMovie from "./features/movies/components/CreateMovie";
import FilterMovies from "./features/movies/components/FilterMovies";
import EditMovie from "./features/movies/components/EditMovie";
import MovieDetail from "./features/movies/components/MovieDetail";
import CreateActors from "./features/actors/components/CreateActors";
import EditActors from "./features/actors/components/EditActors";
import IndexActors from "./features/actors/components/IndexActors";
import IndexTheaters from "./features/theaters/components/IndexTheaters";
import EditTheater from "./features/theaters/components/EditTheater";
import CreateTheater from "./features/theaters/components/CreateTheater";
import HandleRouteNotFound from "./features/home/components/HandleRouteNotFound";


export default function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/genres' element={<IndexGenres/>} />
            <Route path='/genres/creategenre' element={<CreateGenre/>} />
            <Route path='/genres/editgenre/:id' element={<EditGenre/>} />
            <Route path='/movies/createmovie' element={<CreateMovie/>} />
            <Route path='/movies/editmovie/:id' element={<EditMovie/>} />
            <Route path='/movies/filtermovies' element={<FilterMovies/>} />
            <Route path='/movies' element={<MovieDetail/>} />
            <Route path='/actors' element={<IndexActors/>} />
            <Route path='/actors/createactor' element={<CreateActors/>} />
            <Route path='/actors/editactor/:id' element={<EditActors/>} />
            <Route path='/theaters' element={<IndexTheaters/>} />
            <Route path='/theaters/createtheater' element={<CreateTheater/>} />
            <Route path='/theaters/edittheater/:id' element={<EditTheater/>} />
                <Route path='*' element={<HandleRouteNotFound/>} />
          </Routes>
        </>
    )
}