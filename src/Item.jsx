import { useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'
import { CSS } from '@dnd-kit/utilities';



function Item({commencer1}) {
  const draggable=useDraggable({id:2})
  const style1=draggable.transform?{transform:`translateX(${draggable.transform.x}px) translateY(${draggable.transform.y}px)`}:{}
  

  return (
    <div style={style1} ref={draggable.setNodeRef} {...draggable.listeners} {...draggable.attributes} className={`bg-red-500 flex justify-center items-center w-[100px] h-[100px] rounded-[10px] !outline-none ${commencer1==true?"text-white":""}`}>
     {commencer1?"drag start":"drag end"}
    </div>
  )
}

export default Item