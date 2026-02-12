import { useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'

function Comp1({id1}) {
        const draggable=useDraggable({id:1})
        const style1=draggable.transform?{transform:`translateX(${draggable.transform.x}px) translateY(${draggable.transform.y}px)`}:undefined
    
        useEffect(()=>{
         console.log("rendu")
        },)
        return <div style={style1}  ref={draggable.setNodeRef} {...draggable.listeners} {...draggable.attributes} className='bg-red-500 rounded-[10px] w-[100px] h-[100px]'>
    
        </div>

}

export default Comp1