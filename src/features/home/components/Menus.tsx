import React from "react";
import { NavLink } from "react-router";

export const Menus :React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">React Movies</NavLink>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink to="/movies/filtermovies" className="nav-link">Filter Movies</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/genres" className="nav-link">Genres</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/actors" className="nav-link">Actors</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/theaters" className="nav-link">Theaters</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/movies/createmovie" className="nav-link">Create Movie</NavLink>
                </li>

            </ul>    
            </div>
        </div>
    </nav> 
);
    }
