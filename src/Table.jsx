import React, { useEffect, useRef } from 'react'

function Table() {
  const lignes=[1,2,3,4]
  const tableau=[
                 [useRef(),useRef(),useRef(),useRef()]
                ,[useRef(),useRef(),useRef(),useRef()]
                ,[useRef(),useRef(),useRef(),useRef()]
                ,[useRef(),useRef(),useRef(),useRef()]
                ]






         const animer1=async()=>{
            console.log("exe")
            for(let i=0;i<lignes.length;i++){
                for(let j=0;j<lignes.length;j++){
                        await new Promise((res,rej)=>{
                            setTimeout(() => {
                            res("hey") 
                            }, 100);
                        })



                                tableau[i][j].current.style.background="green"
                                tableau[i][j].current.style.color="white"

                }
            }
        }


  return (
    <div className=' w-[600px] h-[600px] flex flex-col justify-center items-center'>
        <table style={{borderCollapse:'collapse'}} className='border '>
            <tbody>
                {lignes.map((ele,key)=>{
                    return <tr key={key}>
                                <td ref={tableau[key][0]} className='border-[1px] mee border-[black] w-[50px] h-[50px] relative'>
                                    <div className='w-[100%] h-[100%] absolute top-0 right-0 flex justify-center items-center'>{ele}</div>
                                </td>
                                <td ref={tableau[key][1]} className='border-[1px] mee border-[black] w-[50px] h-[50px] relative'>
                                    <div className='w-[100%] h-[100%] absolute top-0 right-0 flex justify-center items-center'>{ele}</div>
                                </td>
                                <td ref={tableau[key][2]} className='border-[1px] mee border-[black] w-[50px] h-[50px] relative'>
                                    <div className='w-[100%] h-[100%] absolute top-0 right-0 flex justify-center items-center'>{ele}</div>
                                </td>
                                <td ref={tableau[key][3]} className='border-[1px] mee border-[black] w-[50px] h-[50px] relative'>
                                    <div className='w-[100%] h-[100%] absolute top-0 right-0 flex justify-center items-center'>{ele}</div>
                                </td>
                        </tr>
                })}
            </tbody>
        </table>

        <button onClick={animer1} className='mt-4 rounded-[12px] bg-blue-500 text-white p-4 hover:bg-blue-300'>Animer</button>
    </div>
  )
}

export default Table