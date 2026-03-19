import { NavLink } from "react-router";

export default  function IndexTheaters() {
    const url='/theaters/edittheater/4';
    return (
        <div>
            <h1 className="font-serif text-2xl text-white italic">Theaters</h1>
            <div className="d-flex gap-2">
            <NavLink className="btn btn-primary" to="/theaters/createtheater">Create Theater</NavLink>
            <NavLink className="btn btn-secondary" to={url}>Edit Theater</NavLink>
        </div>
        </div>
    );
}