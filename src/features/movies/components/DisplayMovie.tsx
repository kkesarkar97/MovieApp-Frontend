
import { NavLink } from 'react-router';
import  type Movie  from '../models/movie.model';
import Styles from  './DisplayMovie.module.css';

interface DisplayMovieProps {
    movie: Movie;
}
const DisplayMovie:React.FC<DisplayMovieProps> = (props) => {
    const buildClick=()=>'/movies/'+props.movie.id;
    return (
    <div className={Styles.div} >
        <NavLink to={buildClick()}>
            <img src={props.movie.poster} alt="Poster" />
            </NavLink>
        <p>
            <NavLink to={buildClick()}>
            {props.movie.title} 
            </NavLink>
        </p>
       
    </div>);
};

export default DisplayMovie;

