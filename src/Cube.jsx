import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BsArrow90DegDown, BsArrow90DegLeft, BsArrow90DegRight, BsArrowRight } from 'react-icons/bs'


function Cube({changer}) {
  const ref1=useRef()
  const ref2=useRef(0)
  const tableau=[useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
  const ref6=useRef("ferme")
  const ref111=useRef()
  const arrows=[useRef(),useRef(),useRef(),useRef()]



  const tester=()=>{
   ref2.current+=4
   ref1.current.style.transform=`rotateX(${ref2.current}deg) rotateY(${ref2.current}deg)`
  }


  const tester1=()=>{
            tableau.forEach((ele,key)=>{
            let exemple;
            switch(ele.current.innerText){
                case "0":
                    exemple=ref6.current=="ferme"?`rotateX(0deg) translateZ(200px)`:"rotateX(0deg) translateZ(100px)"
                    break
                case "180":
                    exemple=ref6.current=="ferme"?`rotateX(180deg) translateZ(200px)`:"rotateX(180deg) translateZ(100px)"
                    break
                case "90":
                    exemple=ref6.current=="ferme"?`rotateX(90deg) translateZ(200px)`:"rotateX(90deg) translateZ(100px)"
                    break
                case "270":
                    exemple=ref6.current=="ferme"?`rotateX(270deg) translateZ(200px)`:"rotateX(270deg) translateZ(100px)"
                    break
                case "90Y":
                    exemple=ref6.current=="ferme"?`rotateY(90deg) translateZ(200px)`:"rotateY(90deg) translateZ(100px)"
                    break
                case "-90Y":
                    exemple=ref6.current=="ferme"?`rotateY(-90deg) translateZ(200px)`:"rotateY(-90deg) translateZ(100px)"
                    break
            }
                
            ele.current.className="transition-[all] duration-[2s]"
            ele.current.style.transform=exemple

            })

            ref6.current=ref6.current=="ferme"?"ouvrir":"ferme"
  }




  const changer2=(e)=>{

    if(e.currentTarget==arrows[0].current)
    {
      ref1.current.style.transform="rotateX(180deg)"
    }
    else if(e.currentTarget==arrows[1].current)
    {
      ref1.current.style.transform="rotateY(-180deg)"

    }else if(e.currentTarget==arrows[2].current){
        ref1.current.style.transform="rotateX(-180deg)"

    }else if(e.currentTarget==arrows[3].current) {
      ref1.current.style.transform="rotateY(180deg)"
    }

  }


  return (
    <div onClick={()=>{changer()}}  ref={ref111} style={{width:"300px",height:"600px",display:"flex",gap:"100px",flexDirection:"column",justifyContent:"center",alignItems:"center",perspective:"1000px",paddingTop:"50px"}}>
       <div onMouseMove={tester}  ref={ref1} style={{width:"200px",flexShrink:0,height:"200px",position:"relative",transformStyle:"preserve-3d",transition:"all",transitionDuration:"2s"}}>
          <div ref={tableau[0]} style={{background:"red",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(0deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>0</div>
          <div ref={tableau[1]} style={{background:"green",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(180deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>180</div>
          <div ref={tableau[2]} style={{background:"yellow",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>90</div>
          <div ref={tableau[3]} style={{background:"purple",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(270deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>270</div>
          <div ref={tableau[4]} style={{background:"brown",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateY(90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>90Y</div>
          <div ref={tableau[5]} style={{background:"pink",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateY(-90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>-90Y</div>
       </div>
       <button onClick={tester1} className='bg-blue-500 text-white p-4 mt-10 rounded-[12px] hover:bg-blue-300 cursor-pointer'>click</button>
       <div className=' w-full flex flex-wrap justify-center items-center gap-3'>
         <span ref={arrows[0]} onClick={changer2} className='bg-blue-500 text-white p-3 rounded-[10px] cursor-pointer hover:bg-blue-300'><BsArrowRight size={25} style={{transform:"rotate(-90deg)"}}></BsArrowRight></span>
         <div className='w-full flex gap-3 justify-center'>
            <span ref={arrows[1]} onClick={changer2} className='bg-blue-500 text-white p-3 rounded-[10px] cursor-pointer hover:bg-blue-300'><BsArrow90DegLeft size={25}></BsArrow90DegLeft></span>
            <span ref={arrows[2]} onClick={changer2} className='bg-blue-500 text-white p-3 rounded-[10px] cursor-pointer hover:bg-blue-300'><BsArrowRight size={25} style={{transform:"rotate(90deg)"}}></BsArrowRight></span>
            <span ref={arrows[3]} onClick={changer2} className='bg-blue-500 text-white p-3 rounded-[10px] cursor-pointer hover:bg-blue-300'><BsArrow90DegRight size={25}></BsArrow90DegRight></span>
         </div>
       </div>
    </div>
  )
}

export default Cube