import React, { useRef } from 'react'

function Tester12() {
  const ref1=useRef()
  const valeur=useRef(400)


  const changer=()=>{
   valeur.current-=10
   ref1.current.style.width=`${valeur.current}px`
  }


  return (
    <>
        <div ref={ref1} className='flex tester1 flex-wrap justify-center items-center gap-3 w-[400px] h-[100px] border-black border-[1px]'>
            <div className=' bg-red-400 w-[100px] h-[50px] shrink-[1] grow-[2] tester'>tester</div>
            <div className=' bg-green-500 w-[100px] h-[50px] shrink-[1] grow-[1]'></div>
            <div className=' bg-blue-500 w-[100px] h-[50px] shrink-[1] grow-[1]'></div>
        </div>
        <button onClick={changer} className='text-white bg-blue-500 rounded-[10px] p-4 hover:bg-blue-300 cursor-pointer !outline-none'>click</button>
    </>

  )
}

export default Tester12