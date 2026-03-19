import { NavLink } from "react-router";

export default function IndexGenres() {
    const url='/genres/editgenre/3';
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Genres</h1>
            <div className="d-flex gap-2">
            <NavLink className="btn btn-primary" to="/genres/creategenre">Create Genre</NavLink>
            <NavLink className="btn btn-secondary" to={url}>Edit Genre</NavLink>
            </div>
        </div>
    );
}