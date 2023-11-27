import React, { useState } from 'react';

export function App() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const handleMostrarContenido = () => {
    setMostrarContenido(true);
  };

  return (
    <>
      <div className="title-container">
      </div>
      <div className='contenedor'>
        <button onClick={handleMostrarContenido}>Mostrar Contenido</button>
      </div>
      {mostrarContenido && (
        <div className="contenedor-superpuesto">
          <p>Este es el contenido superpuesto</p>
          <button onClick={() => setMostrarContenido(false)}>Cerrar</button>
        </div>
      )}
    </>
  );
}
