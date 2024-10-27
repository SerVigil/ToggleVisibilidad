import React, {useState} from 'react';
function Visibilidad(){
 // Definimos un estado para controlar la visibilidad del contenido
 const [isVisible, setIsVisible] = useState(false);

 // Función para alternar la visibilidad
 const visibilidad = () => {
   setIsVisible(!isVisible);
    };

 return (
   <div>
     <button onClick={visibilidad}>
       {isVisible ? 'Ocultar' : 'Mostrar'}
     </button>
     {isVisible && (
       <p>
         ¡Este es el contenido que se muestra o se oculta!
       </p>
     )}
   </div>
 );
}
export default Visibilidad;