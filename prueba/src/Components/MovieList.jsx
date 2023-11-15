// Importando la biblioteca React y otros elementos necesarios
import React, { useEffect, useRef, useState } from 'react';

// Importando el servicio GlobalApi para obtener datos de películas por género
import GlobalApi from '../Services/GlobalApi';

// Importando los componentes MovieCard y HrMovieCard
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';

// Importando los iconos de flecha para la navegación en la lista de películas
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

// Definiendo el componente funcional MovieList que recibe las propiedades genreId e index_
function MovieList({ genreId, index_ }) {
    // Utilizando el hook useState para manejar el estado de la lista de películas
    const [movieList, setMovieList] = useState([]);

    // Utilizando el hook useRef para obtener una referencia al elemento DOM
    const elementRef = useRef(null);

    // Utilizando el hook useEffect para cargar las películas cuando el componente se monta
    useEffect(() => {
        getMovieByGenreId();
    }, []);

    // Función para obtener las películas por ID de género
    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results);
        });
    };

    // Función para desplazar la lista hacia la derecha
    const slideRight = (element) => {
        element.scrollLeft += 500;
    };

    // Función para desplazar la lista hacia la izquierda
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    };

    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <div className='relative'>
            {/* Icono de flecha izquierda para desplazar la lista hacia la izquierda */}
            <IoChevronBackOutline
                onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'} `}
            />

            {/* Contenedor de la lista de películas */}
            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {/* Mapeando y renderizando las tarjetas de películas */}
                {movieList.map((item, index) => (
                    <>
                        {index % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </>
                ))}
            </div>

            {/* Icono de flecha derecha para desplazar la lista hacia la derecha */}
            <IoChevronForwardOutline
                onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            />
        </div>
    );
}

// Exportando el componente MovieList para que pueda ser utilizado en otros archivos
export default MovieList;
