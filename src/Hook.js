import { useEffect, useMemo } from "react"


const useHook=()=>{

    
        const tester=useMemo(()=>{
        console.log("executée")
        return 11
        },[])

        useEffect(()=>{
         console.log("tester tester tester")
        },)

        return tester
}

export default useHook