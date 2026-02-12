import { useDroppable } from '@dnd-kit/core'
import React, { useEffect } from 'react'

function Drag2({element,cacher}) {
  const drop=useDroppable({id:1})


  return (
    <div ref={drop.setNodeRef} className='border-black border-[1px] w-[100%] h-[200px]'>
      {cacher==false?element:<></>}
    </div>
  )
}

export default Drag2