import React from "react";

function Elemento(props) {
    console.log({props})
    return (
             <button className="elemento"> {props.text}
             </button>
    );
}

export {Elemento}