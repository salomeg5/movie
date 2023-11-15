// Importando la biblioteca React y las imágenes y videos de las casas de producción
import React from 'react';
import disney from './../assets/Images/disney.png';
import marvel from './../assets/Images/marvel.png';
import nationalG from './../assets/Images/nationalG.png';
import pixar from './../assets/Images/pixar.png';
import starwar from './../assets/Images/starwar.png';
import starwarV from './../assets/Videos/star-wars.mp4';
import disneyV from './../assets/Videos/disney.mp4';
import marvelV from './../assets/Videos/marvel.mp4';
import nationalGeographicV from './../assets/Videos/national-geographic.mp4';
import pixarV from './../assets/Videos/pixar.mp4';

// Definiendo el componente funcional ProductionHouse
function ProductionHouse() {
    // Definiendo una lista de objetos que representa las casas de producción con imágenes y videos
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGeographicV
        },
    ];

    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
            {/* Mapeando y renderizando cada casa de producción */}
            {productionHouseList.map((item) => (
                <div
                    key={item.id}
                    className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'
                >
                    {/* Reproductor de video superpuesto */}
                    <video
                        src={item.video}
                        autoPlay
                        loop
                        playsInline
                        muted
                        className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'
                    />

                    {/* Imagen de la casa de producción */}
                    <img src={item.image} className='w-full z-[1] opacity-100' />
                </div>
            ))}
        </div>
    );
}

// Exportando el componente ProductionHouse para que pueda ser utilizado en otros archivos
export default ProductionHouse;
