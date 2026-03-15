import type Movie from "../models/movie.model";
import DisplayMovie from "./DisplayMovie";
import GenericList from "../../../components/GenericList";
import Styles from './MovieList.module.css';


export interface MovieListProps {
    movies?:Movie[];
}

const MovieList:React.FC<MovieListProps>=(props)=>{

    // if(!props.movies) {
    //     return <p>...No Loading</p>;
    // }
    // if(props.movies.length===0) {
    //     return <p>...No Movies</p>;
    // }
    // return(
    //     <div className={Styles.div}>
    //         {props.movies.map(movie=><DisplayMovie key={movie.id} movie={movie} />)}
    //     </div>
    // )if(!props.movies) {
    //     return <p>...No Loading</p>;
    // }
    // if(props.movies.length===0) {
    //     return <p>...No Movies</p>;
    // }
    // return(
    //     <div className={Styles.div}>
    //         {props.movies.map(movie=><DisplayMovie key={movie.id} movie={movie} />)}
    //     </div>
    // )
    return(
    <GenericList list={props.movies} children={<div className={Styles.div}>
        {props.movies?.map(movie=><DisplayMovie key={movie.id} movie={movie} />)}
    </div>}  emptyUI={<p>...No Movies</p>} >
    
    </GenericList>
    );
};
export default MovieList;