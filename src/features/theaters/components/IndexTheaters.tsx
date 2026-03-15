import { NavLink } from "react-router";

export default  function IndexTheaters() {
    const url='/theaters/edittheater/4';
    return (
        <div>
            <h1>Theaters</h1>
            <NavLink className="btn btn-primary" to="/theaters/createtheater">Create Theater</NavLink>
            <NavLink className="btn btn-secondary" to={url}>Edit Theater</NavLink>
        
        </div>
    );
}