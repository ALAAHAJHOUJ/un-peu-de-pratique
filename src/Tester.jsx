import React, { useContext, useEffect, useMemo } from 'react'
import { context1 } from './Tester1'


function Tester() {
  const recuperer=useContext(context1)

  useEffect(()=>{
   console.log("rendu")
  },)



  return (
    <>
      <div className='border-black border-[1px] cursor-pointer p-4' onClick={()=>{recuperer.changer1()}}>{recuperer.valeur}</div>
    </>
  )
}

export default Tester