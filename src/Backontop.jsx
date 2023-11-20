import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackToTOP() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
      
        </>
    );
}