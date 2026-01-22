import React, { useState ,useRef,useCallback,useEffect, createContext} from 'react'
import Tester from './Tester'


export const context1=createContext(null)
function Tester1() {
    const tableau=[useRef(),useRef(),useRef()]
    const ref1=useRef()
    const [state,setState]=useState(0)
    const ref4=useRef()
    const [value,setValue]=useState(0)
  
  
    const tester=(e)=>{
      if(e.key!="ArrowUp" && e.key!="ArrowDown") return 
  
      if(e.target==tableau[0].current){
         if(e.key=="ArrowUp") tableau[2].current.focus() 
         else tableau[1].current.focus()
      }
      else if(e.target==tableau[1].current){
         if(e.key=="ArrowUp") tableau[0].current.focus() 
         else tableau[2].current.focus()
      }else {
         if(e.key=="ArrowUp") tableau[1].current.focus() 
         else tableau[0].current.focus()
      }
    }
  
    
  
    const tester1=useCallback(()=>{
    console.log("tester1")
    },[])
  
  
  
    useEffect(()=>{
      tableau.forEach((ele,key)=>{
        ele.current.placeholder="champs"+key
      })
  
    },[])
  
    useEffect(()=>{
      console.log("executée tester1")
    },[tester1])


  return (
        <>
        <div  className="w-[300px] p-4 h-[500px] max-[500px]:w-[90%] flex justify-center items-center border-black border-[1px] mx-auto mt-[200px]  [perspective:1000px] [transform-style:preserve-3d]">
           <form ref={ref4} className='flex flex-col gap-10 items-center justify-center w-full' >
              <input onKeyDown={tester} ref={tableau[0]} type="text" className='w-[160px] h-[50px] border-black border-[1px] '/>
              <input onKeyDown={tester} ref={tableau[1]} type="text" className='w-[160px] h-[50px] border-black border-[1px] '/>
              <input onKeyDown={tester} ref={tableau[2]} type="text" className='w-[160px] h-[50px] border-black border-[1px] '/>
                    
              <div ref={ref1} className='border-black border-[1px] text-white bg-blue-600 w-[50px] h-[50px] flex justify-center items-center cursor-pointer'>tester</div>

           </form>
           <context1.Provider value={{valeur:state,changer:()=>{setState(state+1)},changer1:()=>{ref4.current.style.transform=`rotateY(${value}deg)`;setValue((prev)=>prev+10)}}}>
               <Tester></Tester>
           </context1.Provider>

        </div>
    </>
  )
}

export default Tester1