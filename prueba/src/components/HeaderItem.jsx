// Importando la biblioteca React
import React from 'react';

// Definiendo el componente funcional HeaderItem que recibe las propiedades name e Icon
function HeaderItem({ name, Icon }) {
    // Devolviendo JSX (estructura de interfaz de usuario)
    return (
        <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer transition-all hover:scale-50 hover:underline underline-offset-8 mb-2'>
            {/* Mostrando el ícono recibido como prop */}
            <Icon />
            {/* Mostrando el nombre recibido como prop */}
            <h2 className=''>{name}</h2>
        </div>
    );
}

// Exportando el componente HeaderItem para que pueda ser utilizado en otros archivos
export default HeaderItem;
