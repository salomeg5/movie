// Importando la biblioteca React y los elementos necesarios
import React, { useEffect, useRef, useState } from 'react';

// Importando el servicio GlobalApi para obtener las películas de tendencia
import GlobalApi from '../Services/GlobalApi';

// Importando los iconos de flecha para la navegación en el slider
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

// Definiendo la URL base para las imágenes de las películas
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// Obteniendo el ancho de la pantalla actual
const screenWidth = window.innerWidth;

// Definiendo el componente funcional Slider
function Slider() {
    // Utilizando el hook useState para manejar el estado de la lista de películas
    const [movieList, setMovieList] = useState([]);

    // Utilizando el hook useRef para obtener una referencia al elemento DOM
    const elementRef = useRef();

    // Utilizando el hook useEffect para cargar las películas cuando el componente se monta
    useEffect(() => {
        getTrendingMovies();
    }, []);

    // Función para obtener las películas de tendencia
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    // Función para desplazar el slider hacia la derecha
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    };

    // Función para desplazar el slider hacia la izquierda
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    };

    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <div>
            {/* Icono de flecha izquierda para desplazar el slider hacia la izquierda */}
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer "
                onClick={() => sliderLeft(elementRef.current)}
            />

            {/* Icono de flecha derecha para desplazar el slider hacia la derecha */}
            <HiChevronRight
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)}
            />

            {/* Contenedor del slider con la lista de películas */}
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {/* Mapeando y renderizando las imágenes de las películas en el slider */}
                {movieList.map((item, index) => (
                    <img
                        key={index}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                        alt={item.title} // Agregando un atributo alt para accesibilidad
                    />
                ))}
            </div>
        </div>
    );
}

// Exportando el componente Slider para que pueda ser utilizado en otros archivos
export default Slider;
