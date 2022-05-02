import React from 'react'
import './Indice.css'
import { Lista } from './lista';
import './lista.css'


function Indice () {
    return (
        <React.Fragment>
              <div class="headContent"> 
                <button class="navegacion"><b>Búsqueda</b></button>
                <button class="navegacion"> <b>Números anteriores</b> </button>
                <Lista></Lista>
                <button class="navegacion"> <b>Secciones Definidas</b> </button>
              </div>
        </React.Fragment>
    );
}


export { Indice };