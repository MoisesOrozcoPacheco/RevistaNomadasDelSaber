import React from "react";

function Elemento(props) {
    return (
        <il>
             <button className="elemento"> {props.children}
             </button>
        </il>
    );
}

export {Elemento}