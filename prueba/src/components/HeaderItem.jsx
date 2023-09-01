import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white  flex items-center gap-3 text-[15px] font-semibold cursor-pointer transition-all hover:scale-50 hover:underline  underline-offset-8 mb-2 '>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem