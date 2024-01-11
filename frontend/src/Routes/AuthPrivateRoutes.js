import React from 'react';
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
