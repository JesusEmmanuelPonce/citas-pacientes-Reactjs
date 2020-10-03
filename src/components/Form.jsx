import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';

const Form = ({createCita}) => {
    // States
    const [cita, setCita] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })
    const [error, setError] = useState(false)

    // OnChange
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { pet, owner, date, time, symptoms } = cita

    // Validation
    const handleSubmit = e => {
        e.preventDefault()
        
        if(pet.trim() === '' ||  owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '' ){
            setError(true)
            return
        }
        setError(false)
        
        // ID
        cita.id = uuid()

        // Create cita
        createCita(cita)

        // Reset state
        setCita({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })

    }

    return ( 
        <>
            <form
                onSubmit={handleSubmit}
                className="padding-4"
            >
                {
                    error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null
                }
                <label >
                    Nombre Mascota
                </label>
                <input 
                    type="text"  
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={pet}
                />
                <label >
                    Nombre Dueño
                </label>
                <input 
                    type="text"  
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={owner}
                />
                <label >
                    Fecha
                </label>
                <input 
                    type="date"  
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label >
                    Hora
                </label>
                <input 
                    type="time"  
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label >
                    Síntomas
                </label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Crear cita
                </button>
            </form>
        </>
    );
}
 
export default Form;