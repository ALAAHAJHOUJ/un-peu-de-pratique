import React, {useEffect, useState} from 'react';
import {DndContext, DragOverlay, useDraggable} from '@dnd-kit/core';
import Drag2 from './Drag2';
import Item from './Item';





function Drag() {
  const [rester,setRester]=useState(true)
  const [Commencer,setCommencer]=useState(false)


  const commencer=()=>{
    console.log("commencer")
    setCommencer(true)
  }

  const finir=()=>{
    setCommencer(false)
  }




  return (
    <div className='border-[1px] border-black w-[400px] h-[500px] flex justify-center items-center flex-col gap-4 content-center'>
        <DndContext>
          <DragOverlay dropAnimation={{ duration: 250, easing: 'ease-out' }}>
             <Item></Item>
          </DragOverlay>
          <Drag2></Drag2>
        </DndContext>   
    </div>
  )
}

export default Drag