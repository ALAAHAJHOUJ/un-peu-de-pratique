import React, { useState } from 'react'
import Draggable from 'react-draggable'
import useHook from './Hook'


function Tester2() {
  const tableau=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  const tester11=useHook()
  const [state,setState]=useState(0)

  return (
        <>
        <div onClick={()=>{setState(state+1)}} className='border-black overflow-hidden border-[1px] w-[300px] h-[300px] flex flex-wrap content-start gap-3 group [perspective:1000px] '>
            {tableau.map((ele,key)=>{
                const tester=ele==6?"":""
                return <div key={key} className={`bg-red-500 group-hover:[transform:scale(1.2)rotate(90deg)]  cursor-pointer group-hover:bg-red-200 group-hover:text-white transition-all duration-[2s] w-[50px] h-[50px] flex justify-center items-center ${tester}`}>{ele}</div>
            })}
        </div>
        {tester11}
        </>


  )
}

export default Tester2