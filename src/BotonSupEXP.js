import React, { useState } from 'react';

export function BotonSupEXP ({direccionImagen, textoA, textoB, imagenA, imagenB}) {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const handleMostrarContenido = () => {
    setMostrarContenido(true);
  };

  return(
    <>
      <button onClick={handleMostrarContenido} className="etiquetaA" >
        <img  className="imagenSuperior" src={direccionImagen} alt="esUnaImagen" />
      </button>

        {/* Contenedor superpuesto */}
        {mostrarContenido && (
          <div className="contenedor-superpuesto">
            <div className="contenedor-superpuesto-divs">
              <div className='textoA-nueva'><p>{ textoA }</p></div>
              <div className='asdasd'><img  className="imgNueva" src={imagenA} alt="esUnaImagen" /></div>
              <div className='asdasd'><img  className="imgNueva" src={imagenB} alt="esUnaImagen" /></div>
              <div className='textoB-nueva'><p>{ textoB }</p></div>  
            </div>
            <button className="botCerrar" onClick={() => setMostrarContenido(false)}>Cerrar ❌</button>
          </div>
        )}

    </>
  )
}