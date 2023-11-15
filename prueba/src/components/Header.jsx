// Importando la biblioteca React y el hook useState desde 'react'
import React, { useState } from 'react';

// Importando la imagen del logo desde una ruta relativa
import logo from './../assets/images/logo.png';

// Importando iconos específicos desde 'react-icons/hi2'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiPlus,
    HiDotsVertical
} from "react-icons/hi";

// Importando el componente HeaderItem desde una ruta relativa
import HeaderItem from './HeaderItem.jsx';

// Creando el componente funcional llamado Header
function Header() {
    // Utilizando el hook useState para manejar el estado del menú desplegable
    const [toggle, setToggle] = useState(false);

    // Definiendo un array de objetos que representa los elementos del menú
    const menu = [
        {
            name: 'Inicio',
            icon: HiHome
        },
        {
            name: 'Buscar',
            icon: HiMagnifyingGlass
        },
        {
            name: 'Lista',
            icon: HiPlus
        },
        {
            name: 'Originals',
            icon: HiStar
        },
        {
            name: 'Movies',
            icon: HiPlayCircle
        },
        {
            name: 'Series',
            icon: HiTv
        }
    ];

    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <div className='flex items-center justify-between p-5'>
            {/* Sección izquierda del encabezado con el logo y elementos del menú */}
            <div className='flex  gap-8 items-center'>
                {/* Mostrando el logo */}
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />

                {/* Elementos del menú para pantallas medianas y grandes */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Elementos del menú para pantallas pequeñas */}
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={index} name={''} Icon={item.icon} />
                    ))}

                    {/* Botón de menú desplegable para pantallas pequeñas */}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />

                        {/* Menú desplegable condicional */}
                        {toggle ? (
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Sección derecha del encabezado con la imagen de perfil */}
            <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/02/wanda-icon.png.webp"
                className='w-[40px] rounded-full' />
        </div>
    );
}

// Exportando el componente Header para que pueda ser utilizado en otros archivos
export default Header;
