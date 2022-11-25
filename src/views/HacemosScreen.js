import { ofertaAction } from "actions/ofertaAction";
import React from "react";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
function HacemosScreen() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ofertaAction())
    }, [])
    
    return (
        <div>
            titulo
        </div>
    );
}

export default HacemosScreen;
