// Importando la biblioteca React
import React from 'react';

// Definiendo la URL base para las imágenes de las películas
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// Definiendo el componente funcional HrMovieCard que recibe la propiedad movie
function HrMovieCard({ movie }) {
    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <section className='hover:scale-110 transition-all duration-150 ease-in'>
            {/* Mostrando la imagen de fondo de la película con la URL base y la ruta específica */}
            <img src={IMAGE_BASE_URL + movie.backdrop_path} 
                className='w-[110px] md:w-[260px] rounded-lg
                hover:border-[3px] border-gray-400 cursor-pointer'
                alt={movie.title} // Agregando un atributo alt para accesibilidad
            />

            {/* Mostrando el título de la película */}
            <h2 className='w-[110px] md:w-[260px] text-white mt-2'>
                {movie.title}
            </h2>
        </section>
    );
}

// Exportando el componente HrMovieCard para que pueda ser utilizado en otros archivos
export default HrMovieCard;
