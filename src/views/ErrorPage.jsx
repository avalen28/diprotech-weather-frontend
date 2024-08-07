import React from 'react';
import { Link } from "react-router-dom";
import sadCloud from "../miscel/sadCloud.png"
import "../styles/error.css"


const ErrorPage = () => {
    return (
        <div className='error-container'>
            <img src={sadCloud} className="error-img" alt="Error" />
            <h2>¡Ups! algo ha salido mal...</h2>
            <Link to="/" className='goBack'>Inicio</Link>
        </div>
    );
};

export default ErrorPage;