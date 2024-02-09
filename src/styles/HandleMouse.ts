import React,{ useState } from "react";

export default function handleMouse (){

    const handleMouseEnter = (event:any) => {
        event.target.style.background = "var(--cor-roxo-claro)"
    };
      const handleMouseLeave = (event:any) => {
        event.target.style.background = "var(--cor-roxo-escuro)"
    };

}

