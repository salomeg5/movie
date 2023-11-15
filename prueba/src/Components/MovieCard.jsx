// Importando la biblioteca React
import React from 'react';

// Definiendo la URL base para las imágenes de las películas
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// Definiendo el componente funcional MovieCard que recibe la propiedad movie
function MovieCard({ movie }) {
    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <>
            {/* Mostrando la imagen de póster de la película con la URL base y la ruta específica */}
            <img src={IMAGE_BASE_URL + movie.poster_path}
                className='w-[110px] md:w-[200px] rounded-lg
                hover:border-[3px] border-gray-400 cursor-pointer
                hover:scale-110 transition-all duration-150 ease-in'
                alt={movie.title} // Agregando un atributo alt para accesibilidad
            />
        </>
    );
}

// Exportando el componente MovieCard para que pueda ser utilizado en otros archivos
export default MovieCard;
