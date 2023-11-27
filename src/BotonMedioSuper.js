import React, { useState } from 'react';
export function BotonMedioSuper ({direccionImagen, textoDeImagen, textoA, textoB, imagenA, imagenB}) {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const handleMostrarContenido = () => {
    setMostrarContenido(true);
  };
  return(
    <>
    <button onClick={handleMostrarContenido} className="etiquetaA-medio-super">
      <img  className="imagen-medio-super" src={direccionImagen} alt="esUnaImagen" />
    </button>
    {mostrarContenido && (
        <div className="contenedor-superpuesto">
          {/* Contenido que deseas mostrar */}

          <div className="contenedor-superpuesto-divs">
            <div className='textoA-nueva'><p>{ textoA }</p></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenA} alt="esUnaImagen" /></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenB} alt="esUnaImagen" /></div>
            <div className='textoB-nueva'><p>{ textoB }</p></div>
            
            
          </div>
          {/* Puedes añadir botones o cualquier otro elemento aquí */}
          <button className="botCerrar" onClick={() => setMostrarContenido(false)}>Cerrar ❌</button>
        </div>
    )}

    <button onClick={handleMostrarContenido} className="texto-medio-EA-super">
      <div className="texto-medio-super">
        <strong>{textoDeImagen}</strong>
      </div>
    </button>
    {mostrarContenido && (
        <div className="contenedor-superpuesto">
          {/* Contenido que deseas mostrar */}

          <div className="contenedor-superpuesto-divs">
            <div className='textoA-nueva'><p>{ textoA }</p></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenA} alt="esUnaImagen" /></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenB} alt="esUnaImagen" /></div>
            <div className='textoB-nueva'><p>{ textoB }</p></div>
            
            
          </div>
          {/* Puedes añadir botones o cualquier otro elemento aquí */}
          <button className="botCerrar" onClick={() => setMostrarContenido(false)}>Cerrar ❌</button>
        </div>
    )}
    </>
  )
}