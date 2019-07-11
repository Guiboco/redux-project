import React from 'react';
import './logout.css';

const logout = () => {
    return ( 
    <div className='logoutBody'>
        <div className='advertencia'>¿Seguro que quiere cerrar la sesión?</div>
        <div className='buttons'>
        <button> Cancelar </button>
        <button> Cerrar </button>
        </div>
        </div>
    )
}

export default logout;