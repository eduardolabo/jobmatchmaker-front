import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
const Main = () => {
    return (

    <div className="main">
        <div className="left">
            <h1 className="logotitle">JOBMATCHMAKER</h1>
        </div>
        <div className="right">
            <Link className="styled-button" to="/Vacancy/Upload">Subir Vacante</Link>
            <Link className="styled-button" to="/CV/Upload">Subir CV</Link>
            <Link className="styled-button" to="/Vacancy">Ver Vacante</Link>
            <Link className="styled-button" to="/CV">Ver CV</Link>
        </div>
    </div>
);
};

export default Main;