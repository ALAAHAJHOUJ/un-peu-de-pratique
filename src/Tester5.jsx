import React, { useEffect, useRef } from 'react'

function Tester5({changer1}) {
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef(0)
  const ref4=useRef(0)
  const ref5=useRef()
  const arreter=useRef(false)



  const changer=(e)=>{
    if(e.target.innerText=="Pivoter 1")
    {
      ref3.current+=90
      ref1.current.style.transform=`rotateX(${ref3.current}deg)`
    }else 
    {
      ref4.current-=90
      ref2.current.style.transform=`rotateX(${ref4.current}deg)`
    }
  }



  return (
    <>
            <div onClick={()=>{changer1()}} ref={ref5} style={{border:"1px solid black",width:"300px",height:"300px",display:"flex",gap:"30px",justifyContent:"center",alignItems:"center",perspective:"1000px"}}>
                <div ref={ref1} style={{width:"100px",height:"100px",transformStyle:"preserve-3d",position:"relative",transition:"all",transitionDuration:"2s"}}>
                    <div style={{background:"red",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(0deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>1</div>
                    <div style={{background:"green",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>2</div>
                    <div style={{background:"purple",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(180deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>3</div>
                    <div style={{background:"brown",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(270deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>4</div>
                </div>
                <div ref={ref2} style={{width:"100px",height:"100px",transformStyle:"preserve-3d",position:"relative",transition:"all",transitionDuration:"2s"}}>
                    <div style={{background:"red",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(0deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>5</div>
                    <div style={{background:"green",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(90deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>6</div>
                    <div style={{background:"purple",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(180deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>7</div>
                    <div style={{background:"brown",opacity:0.6,position:"absolute",top:0,right:0,width:"100%",height:"100%",transform:"rotateX(270deg) translateZ(100px)",color:"white",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>8</div>
                </div>
            </div>

            <div style={{width:"400px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                <button onClick={changer} className='bg-blue-500 text-white p-5 rounded-[12px] hover:bg-blue-300 cursor-pointer !border-none !outline-none'>Pivoter 1</button>
                <button onClick={changer} className='bg-blue-500 text-white p-5 rounded-[12px] hover:bg-blue-300 cursor-pointer !border-none !outline-none'>Pivoter 2</button>
            </div>
    </>
  )
}

export default Tester5