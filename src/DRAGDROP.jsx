import React, { useEffect, useState } from 'react'


const items=[{id:"item1"},{id:"item2"},{id:"item3"},{id:"item4"},{id:"item5"}]

function DRAGDROP() {
  const [liste,setListe]=useState(items)
  const [dragStart,setDragStart]=useState(null)
  const [draghover,setDraghover]=useState(null)


  const handleDragstart=(event,index)=>{
    setDragStart(index)
  }

  const handleDragHover=(event,index)=>{
    setDraghover(index)
  }


  const drop=()=>{
    if(draghover!=null&&dragStart!=draghover){
        const tableau=[...liste]
        tableau[dragStart]=liste[draghover]
        tableau[draghover]=liste[dragStart]
        console.log(draghover,dragStart)
        setListe(tableau)
    }
    setDraghover(null)
    setDragStart(null)
  }



  return (
    <div className='bg-pink-300 rounded-[10px] flex flex-wrap w-[200px] justify-center gap-3 py-5'>
        {liste.map((ele,key)=>{
            return <div 
                    key={ele.id}
                    draggable
                    className='w-[80%] flex justify-center items-center 
                    border box-border py-4 rounded-[10px] bg-red-500 hover:bg-red-300'
                    onDragStart={(event)=>{handleDragstart(event,key)}}
                    onDragEnter={(event)=>{handleDragHover(event,key)}}
                    onDragOver={(e)=>{e.preventDefault()}}
                    onDrop={drop}>
                    {ele.id}
                    </div>
        })}

    </div>
  )
}

export default DRAGDROP