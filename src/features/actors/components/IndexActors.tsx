import { NavLink } from "react-router";


export default function IndexActors() {
    const url='/actors/editactor/3';
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Actors</h1>
            <div className="d-flex gap-2">
            <NavLink className="btn btn-primary" to="/actors/createactor">Create Actor</NavLink>
            <NavLink className="btn btn-secondary" to={url}>Edit Actor</NavLink>
            </div>
        </div>
    );
}
