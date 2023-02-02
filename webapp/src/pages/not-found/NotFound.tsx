import React from "react"
import { Navigate } from "react-router-dom";

const NotFound:React.FC = () => {
    return(
        <Navigate to='/'/>
    )
}

export default NotFound;