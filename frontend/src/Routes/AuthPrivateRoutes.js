import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Signup from "../pages/signup"

const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!localStorage.getItem("jwt");
    return isAuthenticated ? (
        element
    ) : (
        <Signup />
    );
};

export default PrivateRoute;
