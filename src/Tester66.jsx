import React, { useEffect, useRef, useState } from 'react'

function Tester66() {
  const [state,setState]=useState("rien")
  const jeter=()=>{
    setState("jeter")
  }

  return (
    <>
        <div onDragOver={(e)=>{e.preventDefault()}} onDrop={()=>{setState("rien")}}  className='border-black border-[1px] w-[400px] h-[400px] flex-wrap flex justify-center items-center' >

            {state=="rien"?<div onDragEnd={(e)=>{console.log(e)}} className='bg-red-500 h-[100px] w-[100px]' draggable={true}></div>:<></>}

        </div>  
        <div onDragOver={(e)=>{e.preventDefault()}}  onDrop={(e)=>{setState("jeter")}} className='border-black border-[1px] w-[400px] h-[400px] flex justify-center items-center'>
          {state=="jeter"?<div className='bg-red-500 h-[100px] w-[100px]' draggable={true}></div>:<></>}
        </div> 
    </>

  )
}

export default Tester66