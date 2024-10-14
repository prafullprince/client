import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';


function OpenRoute({children}) {
    const navigate = useNavigate();
    const token = useSelector((state)=>state.auth?.token);

    if(token === null){
        return children;
    }
    else{
        navigate("/");
        return null;
    }

}

export default OpenRoute
