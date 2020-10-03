import React from 'react';

const Cita = ({cita, deleteCita}) => ( 
    <div className="cita">
        <p>Mascota: <span>{cita.pet}</span></p>
        <p>Dueño: <span>{cita.owner}</span></p>
        <p>Fecha: <span>{cita.date}</span></p>
        <p>Hora: <span>{cita.time}</span></p>
        <p>Sintomas <span>{cita.symptoms}</span></p>
        <button 
            onClick={() => deleteCita(cita.id)}
            className="button eliminar u-full-width"
        >
            Eliminar &times;
        </button>
    </div>
);
  
 export default Cita;