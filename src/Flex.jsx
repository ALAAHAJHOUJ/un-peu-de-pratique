import React, { useState } from 'react'

function Flex() {
  const [state,setState]=useState(0)
  return (
    <div onClick={()=>{setState(state+1)}} className='border-black border-[1px] w-[400px] h-[200px] flex justify-start gap-7 box-border pl-[50px]'>
         <div className='bg-red-600 w-[100px] h-[100px]'>{state}</div>
         {state%5==0&&<div className='bg-red-600 w-[100px] h-[100px]'></div>}
    </div>
  )
}

export default Flex