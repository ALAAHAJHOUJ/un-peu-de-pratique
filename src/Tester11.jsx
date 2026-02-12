import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { GrInProgress } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'






function Tester11({version,changer}) {
    const [liste,setListe]=useState([{id:1,status:"taches1"},{id:2,status:"taches2"},{id:3,status:"taches2"},{id:4,status:"taches1"},{id:5,status:"taches3"},{id:6,status:"taches3"}])
    const [dragging,setDragging]=useState(null)
    const [status,setStatus]=useState("")
    const autorise=useRef(false)


    const Drop=(zone)=>{
        if(autorise.current==true){
                if(zone==status) return 
                const Draggedelement=liste[dragging]
                const tableau=liste.filter((ele,key)=>{
                return key!=dragging
                })

                tableau.push({...Draggedelement,status:zone})
                autorise.current=false
                setListe(tableau)
                setDragging(null)
                setStatus("")
        }

    }




    return (
      <>
          <h1 className='text-[30px] font-[600]' onClick={()=>{changer()}}>DRAG AND DROP {version}</h1>
          <div className='border-black border-[1px] w-[500px] h-[500px] flex justify-center items-center gap-3'>
                <div className='w-[30%] h-[80%]'>
                    <h2 className='mb-2 w-full text-center font-[600] text-[20px] flex items-center justify-center gap-2'>{status=="taches1"?"dragging":"taches1"}<IoMdClose className='scale-[1.3] text-red-500'></IoMdClose></h2>
                    <div onDrop={()=>{Drop("taches1")}} onDragOver={(e)=>{e.preventDefault();}} id="taches1" className='border-black border-[1px] flex justify-center content-start flex-wrap gap-4 w-full h-full box-border pt-4'>
                        {liste.map((ele,key)=>{
                          return ele.status=="taches1"&&<div  key={key} draggable onDragStart={()=>{autorise.current=true;setDragging(key);setStatus("taches1")}} className='bg-blue-500 rounded-[10px] text-white p-3 cursor-pointer'>{`tache ${ele.id}`}</div>
                        })}
                    </div>
                </div>

                <div className='w-[30%] h-[80%]'>
                    <h2 className='mb-2 w-full text-center font-[600] text-[20px] flex justify-center items-center gap-2'>{status=="taches2"?"dragging":"taches2"}<GrInProgress className=''></GrInProgress></h2>
                    <div onDrop={()=>{Drop("taches2")}} onDragOver={(e)=>{e.preventDefault();}} id="taches2" className='border-black border-[1px] flex flex-wrap justify-center content-start gap-4 w-full h-full box-border pt-4'>
                        {liste.map((ele,key)=>{
                          return ele.status=="taches2"&&<div  key={key}draggable onDragStart={()=>{autorise.current=true;setDragging(key);setStatus("taches2")}}   className='bg-blue-500 rounded-[10px] text-white p-3 cursor-pointer'>{`tache ${ele.id}`}</div>
                        })}
                    </div>
                </div>

                <div className='w-[30%] h-[80%]'>
                    <h2 className='mb-2 w-full text-center font-[600] text-[20px] flex justify-center items-center gap-2'>{status=="taches3"?"dragging":"taches3"}<IoCheckmarkDoneSharp className='text-green-500'></IoCheckmarkDoneSharp></h2>
                    <div onDrop={()=>{Drop("taches3")}} onDragOver={(e)=>{e.preventDefault();}} id="taches3" className='border-black border-[1px] flex flex-wrap justify-center content-start gap-4 w-full h-full box-border pt-4'>
                        {liste.map((ele,key)=>{
                          return ele.status=="taches3"&&<div key={key} draggable onDragStart={()=>{autorise.current=true;setDragging(key);setStatus("taches3")}}  className='bg-blue-500 rounded-[10px] text-white p-3 cursor-pointer'>{`tache ${ele.id}`}</div>
                        })}
                    </div>
                </div>
          </div>
      </>

  )
}

export default Tester11