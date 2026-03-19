import React from "react";
import { NavLink } from "react-router";

import reel from '../../../assets/icons8-movie-projector-32.png';
export const Menus :React.FC = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
    //     <div className="container-fluid">
    //         <NavLink to="/" className="navbar-brand">React Movies</NavLink>
    //         <div className="collapse navbar-collapse">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li className="nav-item">
    //             <NavLink to="/movies/filtermovies" className="nav-link">Filter Movies</NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink to="/genres" className="nav-link">Genres</NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink to="/actors" className="nav-link">Actors</NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink to="/theaters" className="nav-link">Theaters</NavLink>
    //             </li>
    //             <li className="nav-item">
    //             <NavLink to="/movies/createmovie" className="nav-link">Create Movie</NavLink>
    //             </li>

    //         </ul>    
    //         </div>
    //     </div>
    // </nav> 
    <nav className="bg-black text-white px-6 py-3 shadow">
  <div className="flex items-center space-x-8">

    {/* Logo */}
    <NavLink to="/" className="hover:text-gray-200">
      <img src={reel} alt="Movies List"/>
    </NavLink>

    {/* Menu */}
    <ul className="flex space-x-6">
        <li>
        <NavLink to="/" className="hover:text-gray-200">
          React Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies/filtermovies" className="hover:text-gray-200">
          Filter Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/genres" className="hover:text-gray-200">
          Genres
        </NavLink>
      </li>
      <li>
        <NavLink to="/actors" className="hover:text-gray-200">
          Actors
        </NavLink>
      </li>
      <li>
        <NavLink to="/theaters" className="hover:text-gray-200">
          Theaters
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies/createmovie" className="hover:text-gray-200">
          Create Movie
        </NavLink>
      </li>
    </ul>

  </div>
</nav>  
);
    }
