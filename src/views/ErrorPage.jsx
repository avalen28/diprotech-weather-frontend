import React from 'react';
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            something went wrong!
            <Link to="/">Go home!</Link>
        </div>
    );
};

export default ErrorPage;