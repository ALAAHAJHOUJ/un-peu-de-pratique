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


  const tester555=(nb)=>{
    const ValeurSpecials=[{caractere:"I",nombre:1},{caractere:"V",nombre:5},{caractere:"X",nombre:10},{caractere:"L",nombre:50},{caractere:"C",nombre:100},{caractere:"D",nombre:500},{caractere:"M",nombre:1000}]
    let nb1=nb;
    let resultat=""



    const trouver=(valeur)=>{

         let j=0

         while(valeur>ValeurSpecials[j].nombre){
          j++;
         }


         if(ValeurSpecials[j].nombre==valeur) return ValeurSpecials[j]
         return ValeurSpecials[j-1]
    }



    const trouver1=(valeur)=>{

      let j=6;
      while(valeur<ValeurSpecials[j].nombre){
        j--
      }

      return ValeurSpecials[j+1]
    }




    const ajouterSymbole=(nombre)=>{
     const chaine=nombre+""

     if(!(chaine.startsWith(4)||chaine.startsWith(9))){
        //ici on va chercher le symbole assoicé a la valeur maximale
        let valeur=trouver(nombre)


        //ici on va soustraire
        const res=+nombre-valeur.nombre
        return [valeur.caractere,res]
     }else 
      {
        //ici on va chercher l'element le plus proche mais superieur 
       
       let valeur1=trouver1(nombre)
    
       let exemple=nombre+""
       let difference=nombre-(+exemple.split("").map((ele,key)=>{return key!=0?0:+ele}).join(""))
       

       let caractere=(nombre+"").length==1?"I":(nombre+"").length==2?"X":"C"
       caractere+=valeur1.caractere


       return [caractere,+difference]
     }
    }




    while(nb1!=0){

          const resultat1=ajouterSymbole(nb1)
          resultat+=resultat1[0]
          nb1=resultat1[1]
        
    }

    return resultat
  }


  const tester1111=(text)=>{

      const ajouter=(element,element2)=>{
        const [element1]=casExp.filter((ele,key)=>{
          return ele.cara==element
        })

        if(element=="I"){
          if(element2=="V") return 4
          
          if(element2=="X")  return 9
        }

        if(element=="X"){
          if(element2=="L") return 40
          
          if(element2=="C")  return 90 
        }

        if(element=="C"){
          if(element2=="D") return 400
          
          if(element2=="M")  return 900
        }


        return element1.valeur
      }


      const casExp=[{cara:"I",valeur:1},{cara:"V",valeur:5},{cara:"X",valeur:10},{cara:"L",valeur:50},{cara:"C",valeur:100},{cara:"D",valeur:500},{cara:"M",valeur:1000}]
          let i=0
          let resultat=[]
          let k=0


          while(i<text.length){
            
            if((text[i]=="I"&&(text[i+1]=="V"||text[i+1]=="X"))||(text[i]=="X"&&(text[i+1]=="L"||text[i+1]=="C"))||(text[i]=="C"&&(text[i+1]=="D"||text[i+1]=="M"))){
                  resultat.push(ajouter(text[i],text[i+1]))
                  i+=2
            }
            else{
                  resultat.push(ajouter(text[i]))
                  i++
            }

          }

          let res1=0;
          resultat.forEach((ele,key)=>{
            res1+=+ele
          })

          return res1
  }


  const afficher5=()=>{
     console.log(tester1111("I"))
  }

  const tester222=(tab)=>{
   
    const verifier1=(ele1,ele2,indice)=>{
       if(indice+1>ele1.length||indice+1>ele2.length){
        return false
       }

       else {
        if(ele1[indice]==ele2[indice]) return true

        else return false
       }

    }

    let verifier=true
    let k=0
    let Maxlength=0
    let chaine=""
    while(verifier){
      let j=0
      for(let i=1;i<tab.length;i++){
        if(verifier1(tab[j],tab[i],k)==false){
          verifier=false
        }
      }

      
      if(verifier){
               chaine+=tab[0][k]  //n'importe quelle chaine du tableau parce que c est le meme element ==
               Maxlength++
               k++
      }
    }


    return [Maxlength,chaine]
  }


  const tester212=(tab)=>{
     const existe=(ele1,ele2,ele3)=>{
          //on va verifier que ces elements sont tous dans le tableau 
          let i=0
          while(i<tab1.length){
            if(tab1[i].includes(ele1)&&tab1[i].includes(ele2)&&tab1[i].includes(ele3))
            {
              return true
            }
            i++
          }

          return false
     }


     
    const tab1=[]
    for(let i=0;i<tab.length;i++){
      for(let j=0;j<tab.length;j++){
        for(let k=0;k<tab.length;k++){
          if(i!=j && i!=k && j!=k && tab[i]+tab[j]+tab[k]==0){
            //on doit verifier d'abord que le tableau ne va se repeter
            if(existe(tab[i],tab[j],tab[k])==false)
              tab1.push([tab[i],tab[j],tab[k]])
          }
        }
      }
    }

    return tab1
  }


  const testerSomme=(nums,target)=>{
    let sommeProche=nums[0]+nums[1]+nums[2]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            for(let k=0;k<nums.length;k++){
                 if(i!=j && i!=k && j!=k){
                    //on doit calcuer la valeur absolue la difference entre la somme et target
                    if((Math.abs(nums[i]+nums[j]+nums[k])-target)<Math.abs(sommeProche-target)){
                        sommeProche=nums[i]+nums[j]+nums[k]
                    }
                 }
            }
        }
    }

    return sommeProche
  }
return (
    <>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",width:"300px",border:"1px solid black"}} onClick={()=>{}}>
          <div style={{background:"red",height:"100px"}} className='relative group'>
            <div className='bg-[#8080808a] absolute left-[50%] translate-x-[-50%] h-full w-[200%] hidden group-hover:flex  -bottom-full flex-col gap-2'>
              <div className='text-white flex justify-center items-center box-border border-[1px] border-white cursor-pointer hover:bg-[#eae7e782]'>premier element</div>
              <div className='text-white flex justify-center items-center box-border border-[1px] border-white cursor-pointer hover:bg-[#e6e6e683]'>deuxieme element</div>
            </div>
          </div>
          <div style={{background:"yellow",height:"100px"}}></div>
          <div style={{background:"black",height:"100px"}}></div>
      </div>

      <button onClick={()=>{console.log(testerSomme([0,0,0]))}} className='text-white bg-blue-500 hover:bg-blue-300 p-4 rounded-[10px]'>click</button>
    </>

  )
}

export default Pratique