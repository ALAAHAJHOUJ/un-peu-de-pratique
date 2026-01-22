import React, { useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'



function Tester4() {
  const ref1=useRef()
  const valeur=useRef(0)
  const valeur1=useRef(0)
  const valeur2=useRef(0)

  const changer=()=>{
    ref1.current.style.transform=`rotateY(${valeur.current}deg)`
    valeur.current+=1
  }

  const changer1=()=>{
    ref1.current.style.transform=`rotateX(${valeur1.current}deg)`
    valeur1.current+=1
  }

  const changer2=()=>{
    ref1.current.style.transform=`rotateZ(${valeur2.current}deg)`
    valeur2.current+=1
  }

  useEffect(()=>{
    console.log("composant monté dans la page")
  },[])

  return (
    <div  style={{border:"0px solid black",width:"400px",height:"600px",perspective:"1000px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"50px",perspectiveOrigin:"center center",border:"1px solid black",marginTop:"100px"}}>
      <div ref={ref1} style={{width:"100px",height:"100px",position:"relative",transformStyle:"preserve-3d"}}>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"green",opacity:0.6,transform:"rotateX(0deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>0deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"gray",opacity:0.6,transform:"rotateY(45deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:rotateY(45deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>45deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"red",opacity:0.6,transform:"rotateY(90deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:rotateY(90deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>90deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"pink",opacity:0.6,transform:"rotateY(135deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:rotateY(135deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>135deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"purple",opacity:0.6,transform:"rotateY(180deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:rotateY(180deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>180deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"brown",opacity:0.6,transform:"rotateY(225deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:rotateY(225deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>225deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"yellow",opacity:0.6,transform:"rotateY(270deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center"}} className='hover:[transform:rotateY(270deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>270deg</div>
          <div style={{width:"100%",height:"100%",position:"absolute",top:0,right:0,background:"blue",opacity:0.6,transform:"rotateY(315deg) translateZ(150px)",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}} className='hover:[transform:rotateY(315deg)translateZ(200px)!important] transition-all duration-1000 cursor-pointer'>315deg</div>
      </div>
      <button className='bg-blue-500 text-white p-4 rounded-[10px] hover:bg-blue-300 cursor-pointer' onMouseMove={()=>{changer()}}>RotateY</button>
      <button className='bg-blue-500 text-white p-4 rounded-[10px] hover:bg-blue-300 cursor-pointer' onMouseMove={()=>{changer1()}}>RotateX</button>
      <button className='bg-blue-500 text-white p-4 rounded-[10px] hover:bg-blue-300 cursor-pointer' onMouseMove={()=>{changer2()}}>RotateZ</button>
    </div>
  )
}

export default Tester4