import { DndContext, useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'
import Comp1 from './Exemple1'
import Item from './Item'

function Exemple() {


  const tester=(e)=>{
    console.log(e)
  }
  return (
    <div className='border-black border-[1px] w-[400px] h-[400px] flex justify-center items-center gap-5'>
        <DndContext onDragEnd={tester}>
            <Comp1 id1={1}></Comp1>
            <Item></Item>
        </DndContext>
    </div>
  )
}

export default Exemple