import React from 'react'
import './Indice.css'
import { ListaIndice } from './ListaIndice'
import './lista.css'
import { Apartados } from './Datos'


function Indice () {
    return (
        <React.Fragment>
              <div class="headContent"> 
                    {Apartados.map(Boton => (<ListaIndice key={Apartados.text} text={Boton.text}></ListaIndice>))}     
              </div>
        </React.Fragment>
    );
}

export { Indice,Apartados };