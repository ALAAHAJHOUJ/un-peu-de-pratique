import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


function HOVER() {
  const [state,setState]=useState([{id:1,couleur:"bg-red-500 "},{id:2,couleur:"bg-green-500 "},{id:3,couleur:"bg-yellow-500 "},{id:4,couleur:"bg-purple-500 "}])
  const [dragHover,setDraghover]=useState(null)
  const [startdrag,setStartdrag]=useState(null)

  

  const handlestartdrag=(event,index)=>{
      console.log("dragstart")
      setStartdrag(index)
  }

  const handledraghover=(event,index)=>{
      console.log("draghover")
      setDraghover(index)
  }

  const handleDrop=()=>{
      console.log(startdrag,dragHover)
      if(dragHover!=null&&dragHover!=startdrag){
        const tableau=[...state]
        const aux=tableau[dragHover]
        tableau[dragHover]=tableau[startdrag]
        tableau[startdrag]=aux
        console.log(tableau)
        setState(tableau)
      }
  }



  const handledragEnd=()=>{
    setDraghover(null)
    setStartdrag(null)
  }




  return (
    <div className='border-black border-[1px] w-[400px] h-[400px] flex justify-center items-center gap-4 p-10 !box-content'>
       {state.map((ele,key)=>{
        const classe=key==startdrag?' rotate2 opacity-[0.5]':''
        return <div 
        draggable 
        onDragEnd={handledragEnd} 
        onDrop={()=>{handleDrop()}} 
        onDragOver={(e)=>{e.preventDefault()}}
        onDragStart={(event)=>{handlestartdrag(event,key)}} 
        onDragEnter={(event)=>{handledraghover(event,key)}}
        key={key} 
        className={'border-black  flex justify-center items-center border-[1px] w-[100px] h-[100px] text-white text-center '+ele.couleur+classe}>{ele.couleur}</div>
       })}
    </div>
  )
}

export default HOVER