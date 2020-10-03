import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {

  // LocaStorage
  let citasInitials = JSON.parse(localStorage.getItem('citas'))
  if(!citasInitials){
    citasInitials = []
  }
  // State
  const [citas, setCitas] = useState(citasInitials)
  
  useEffect(()=> {
    let citasInitials = JSON.parse(localStorage.getItem('citas'))
    if(citasInitials){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  const createCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  // Delete cita
  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    setCitas(newCitas)
  }

  // Conditional msg
  const title = citas.length === 0 ? 'No hay citas' : null;

  return (
    <>
      <h1>Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">  
            <Form 
              createCita={createCita}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {
              citas.map( cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  deleteCita={deleteCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
