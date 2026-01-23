import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'


function Cube() {
  const ref1=useRef()
  const ref2=useRef(0)
  const tableau=[useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
  const ref6=useRef("ferme")
  const ref111=useRef()
  const refAnimer=useRef(true)
  const [state,setState]=useState(0)

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


  const tester11=()=>{
     tableau.forEach((ele)=>{
        ele.current.style.transition="1s all ease"
        ele.current.style.opacity=0.2
     })
  }


  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      if(refAnimer.current){
            ref111.current.style.position="fixed"
            const X=e.clientX-150;
            const Y=e.clientY-150;
            ref111.current.style.left=`${X}px`
            ref111.current.style.top=`${Y}px`
      }
    })

    window.addEventListener("click",()=>{
        refAnimer.current=refAnimer.current?false:true
        console.log(refAnimer.current)
    })
  },[])


  const tester222=async()=>{
    const promise1=new Promise((res,rej)=>{
        setTimeout(() => {
            res("hello")
        }, 3000);
    })
    
    setTimeout(() => {
        console.log("tester tester tester mee")
    }, 1000);
    const a=await promise1
    console.log(a)
  }


  useEffect(()=>{
    console.log("executée")
  },)


  return (
    <div onClick={tester222} ref={ref111} style={{width:"300px",height:"300px",display:"flex",gap:"100px",flexDirection:"column",justifyContent:"center",alignItems:"center",perspective:"1000px"}}>
       <div onMouseMove={tester}  ref={ref1} style={{width:"200px",flexShrink:0,height:"200px",position:"relative",transformStyle:"preserve-3d",transition:"all",transitionDuration:"2s"}}>
          <div ref={tableau[0]} style={{background:"red",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(0deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>0</div>
          <div ref={tableau[1]} style={{background:"green",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(180deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>180</div>
          <div ref={tableau[2]} style={{background:"yellow",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>90</div>
          <div ref={tableau[3]} style={{background:"purple",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateX(270deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>270</div>
          <div ref={tableau[4]} style={{background:"brown",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateY(90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>90Y</div>
          <div ref={tableau[5]} style={{background:"pink",opacity:0.6,width:"100%",height:"100%",position:"absolute",top:0,right:0,transform:"rotateY(-90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>-90Y</div>
       </div>
       <button onClick={tester1} className='bg-blue-500 text-white p-5 mt-10 rounded-[12px] hover:bg-blue-300 cursor-pointer'>click</button>
    </div>
  )
}

export default Cube