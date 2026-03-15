import { NavLink } from "react-router";


export default function IndexActors() {
    const url='/actors/editactor/3';
    return (
        <div>
            <h1>Actors</h1>
            <NavLink className="btn btn-primary" to="/actors/createactor">Create Actor</NavLink>
            <NavLink className="btn btn-secondary" to={url}>Edit Actor</NavLink>
        </div>
    );
}
