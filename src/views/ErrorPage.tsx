import React from 'react';
import { Link } from "react-router-dom";
import sadCloud from "../images/sadCloud.png";
import "../styles/error.css";

/**
 * ErrorPage component displays an error message with a link to go back to the home page.
 * @component
 */
const ErrorPage: React.FC = () => {
    return (
        <div className='error-container App'>
            <img src={sadCloud} className="error-img" alt="Error" />
            <h2>¡Ups! algo ha salido mal...</h2>
            <Link to="/" className='goBack'>Inicio</Link>
        </div>
    );
};

export default ErrorPage;
