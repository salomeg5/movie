// Importando la biblioteca React para construir componentes de interfaz de usuario
import React from 'react';

// Importando la constante GenresList, que se asume que es un array de géneros
import GenresList from '../Constant/GenresList';

// Importando el componente MovieList desde una ruta relativa
import MovieList from './MovieList';

// Creando un componente funcional llamado GenreMovieList
function GenreMovieList() {
    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <div>
            {/* Iterando a través de los primeros 5 elementos del array GenresList */}
            {GenresList.genere.map((item, index) => index <= 4 && (
                // Renderizando un div para cada género con una clase específica
                <div className='p-8 px-8 md:px-16' key={index}>
                    {/* Mostrando el nombre del género */}
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    {/* Renderizando el componente MovieList con el ID del género y el índice */}
                    <MovieList genreId={item.id} index_={index} />
                </div>
            ))}
        </div>
    );
}

// Exportando el componente GenreMovieList para que pueda ser utilizado en otros archivos
export default GenreMovieList;
