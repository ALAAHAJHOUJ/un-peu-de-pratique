import React from 'react'

function Pratique({changer}) {


  const existe=(depart,indice,element,text)=>{
          if(indice>text.length-1){
            return true
          }

          if(indice==0||indice==text.length-1){
            return false
          }

          let k=depart;
          while(element!=text[k]&&k<indice){
              k++;
          }

          return k==indice?false:true
  }



  const tester=(text)=>{
            let Max=0;
            let i=0;
            while(i<text.length){
                let compteur=0;
                let j=i;
                while(existe(i,j,text[j],text)==false){
                  j++;
                  compteur++;
                }



                if(compteur>Max){
                  Max=compteur;
                }

                i++;
            }

            return Max
  }







  const tester111=(text)=>{

    const palindrome=(text1,index,index2)=>{
      const tab=text1.split("")
      if(tab.length==1) return true
      if(tab.length==2){
        if(tab[0]==tab[1]) return true
        else return false
      }

      for(let i=0;i<(tab.length/2)-1;i++){
        if(tab[i]!=tab[tab.length-1-i]){
          return false
        }
      }

      return true
    }


    
    let Min=1;
    let premier=true;
    for(let i=0;i<text.length;i++){
      let chaine="";
      for(let j=i;j<text.length;j++){

        chaine+=text[j]


        if(palindrome(chaine,i,j)&&chaine.length!=1){
            if(premier){
              premier=false
              Min=chaine.length
            }
            else {
              if(Min>chaine.length){
                Min=chaine.length
              }
            }
        }
      }
    }

    return Min
  }




  const afficher1=()=>{
    console.log(tester111("hhhhbbbbbccc"))
  }
  

  const palindrome1=(nombre)=>{
   
    const inverse=(nombre1)=>{
     
      let result=0;
      let nombre2=nombre1
      while(nombre2!=0){
        result=10*result+nombre2%10  
        nombre2=Math.floor(nombre2/10)
      }
      console.log(result)
      return result
    }



    if(nombre==inverse(nombre)){
      return "palindrome"
    }
    else {
      return "non palindrome"
    }
  }


  const binaire=(nb)=>{
    let nb1=nb;
    let resultat=""
    while(nb1!=0){   
        resultat=nb1%2+resultat  
        nb1=Math.floor(nb1/2)
    }
    return resultat
  }


  const surface=(height)=>{
  let Max=0  //la valeur minimum d'une surface
  const valeurAbsolue=(i,j)=>{
    return j<i?i-j:j-i
  }

  for(let i=0;i<height.length;i++){
    for(let j=0;j<height.length;j++){
        if(i!=j){
            const surfaceCourante=Math.min(height[i],height[j])*valeurAbsolue(i,j)
            Max=surfaceCourante>Max?surfaceCourante:Max //on peut faire aussi ca Max=Math.max(suarfaceCourante,Max)
        }
    }
  }  

  return Max
  }



return (
    <>
      <div  style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",width:"300px",border:"1px solid black"}} onClick={()=>{}}>
          <div style={{background:"red",height:"100px"}}></div>
          <div style={{background:"yellow",height:"100px"}}></div>
          <div style={{background:"black",height:"100px"}}></div>
      </div>

      <button onClick={()=>{console.log(surface([1,2,3,4,5]))}} className='text-white bg-blue-500 hover:bg-blue-300 p-4 rounded-[10px]'>click</button>
    </>

  )
}

export default Pratique