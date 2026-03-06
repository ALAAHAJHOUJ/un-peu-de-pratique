import React from 'react'

function Pratique1() {
     const comb=[
     {nombre:1,cara:[]},
     {nombre:2,cara:["a","b","c"]},
     {nombre:3,cara:["d","e","f"]},
     {nombre:4,cara:["g","h","i"]},
     {nombre:5,cara:["j","k","l"]},
     {nombre:6,cara:["m","n","o"]},
     {nombre:7,cara:["p","q","r","s"]},
     {nombre:8,cara:["t","u","v"]},
     {nombre:9,cara:["w","x","y","z"]}
    ]

    const tester=(text)=>{
       let resultat=[]
       let tableau=[]
       text.split("").forEach(element => {
          const [element1]=comb.filter((ele,key)=>{
            return ele.nombre==+element
          })

          tableau.push(element1)
       });

       tableau.sort((a,b)=>a.nombre-b.nombre)



       tableau=tableau.filter((ele,key)=>{
         return ele.nombre!=1
       })

       if(tableau.length==0) {resultat="aucun caratere ";return resultat }


       const combinaison=(tab3,element)=>{
            const tab4=[...tab3] 
            tab4.shift()
            
            
            if(tab4.length==1){
                  for(let i=0;i<tab4[0].cara.length;i++){
                    resultat.push(""+element+tab4[0].cara[i])
                  }

            }else {
                  for(let i=0;i<tab4[0].cara.length;i++){
                    combinaison(tab4,""+element+(tab4[0].cara[i]))
                  }

            }
       }


       for(let i=0;i<tableau[0].cara.length;i++){
         combinaison(tableau,tableau[0].cara[i])
       }
       

       return resultat

    }


    const existe=(tab1,ele1,ele2,ele3,ele4)=>{

     for(let i=0;i<tab1.length;i++){
        if(tab1[i].includes(ele1)&&tab1[i].includes(ele2)&&tab1[i].includes(ele3)&&tab1[i].includes(ele4)) return true
     }
      
     return false
    }



    var fourSum = function(nums, target) {

        let tableau=[]

        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                for(let k=0;k<nums.length;k++){
                    for(let h=0;h<nums.length;h++){
                       
                        if(i!=j&&i!=k&&i!=h&&j!=k&&j!=h&&k!=h&& nums[i]+nums[j]+nums[k]+nums[h]==target) {if(existe(tableau,nums[i],nums[j],nums[k],nums[h])==false)tableau.push([nums[i],nums[j],nums[k],nums[h]])}
                    }
                }
            }
        }

        return tableau
    };


      class Element{
        constructor(valeur,next){
             this.valeur=valeur
             this.next=next
        }
      }

    const tester11=(liste1,liste2)=>{
       let ref1=liste1
       let ref2=liste2
       let tete=null
       let precedent


       while(ref1!=null&&ref2!=null){
              if(tete==null){
                tete=new Element(undefined,null)
                precedent=tete
              }
              else {
                precedent.next=new Element(undefined,null)
                precedent=precedent.next
              }

              if(ref1.valeur<ref2.valeur){
                precedent.valeur=ref1.val
                precedent.next=null
                ref1=ref1.next
              }

              if(ref1.valeur>ref2.valeur){
                precedent.valeur=ref2.val
                precedent.next=null
                ref2=ref2.next
              }

              if(ref1.valeur==ref2.valeur){
                precedent.valeur=ref1.valeur
                precedent.next=null
                ref1=ref1.next
                ref2=ref2.next
              }


         }

         while(ref1!=null){
            precedent.next=new Element(ref1.valeur,null)
            precedent=precedent.next
            ref1=ref1.next
         }

         while(ref2!=null){
            precedent.next=new Element(ref2.valeur,null)
            precedent=precedent.next
            ref2=ref2.next
         }

         return tete
    }


    const supprimer=(liste,position)=>{
       //on doit d'abord calculer la taille de la liste

       let taille=0
       let ref1=liste
       while(ref1!=null){
          taille++
          ref1=ref1.next
       }
      
       let position1=1
       let elementSupp=liste
       let memoriser=elementSupp
       while(position1<(taille-position)+1){
            memoriser=elementSupp
            elementSupp=elementSupp.next
            position1++
            
       }

       elementSupp=elementSupp.next
       memoriser.next=elementSupp

       
    }




    const combinaison=()=>{

        const tableau=[]

        const verifier=(chaine)=>{
              const stack=[]
              for(let i=0;i<chaine.length;i++){
                if(chaine[i]=="(") stack.push("(")

                else {
                  if(chaine[i]==")"){
                    if(stack.length==0){
                      return "invalide"
                    }
                    else {
                      stack.pop()
                    }
                  }
                }
              }
              if(stack.length==0)
              return "valide"
              else 
              return "invalide"
         
        }



        const filtrer=(tab1)=>{
          const resultat=tab1.filter((ele,key)=>{
            return verifier(ele)=="valide"
          })

          return resultat
        }



        const genener=(element)=>{
            if(element.length<2)
            {
                    genener(element+"(")
                    genener(element+")")
            }
            else {
                tableau.push(element)
            }
        }

        genener("(")
        console.log(filtrer(tableau))
    }


    const tester132=()=>{

      
      const element1=new Element(1,null)
      const element2=new Element(3,null)
      const element3=new Element(5,null)

      element1.next=element2
      element2.next=element3

      const element4=new Element(1,null)
      const element5=new Element(3,null)
      const element6=new Element(5,null)
      const element7=new Element(8,null)
      const element8=new Element(9,null)
      const element9=new Element(10,null)
      const element99=new Element(11,null)


      element4.next=element5
      element5.next=element6
      element6.next=element7
      element7.next=element8
      element8.next=element9
      element9.next=element99


      const element10=new Element(2,null)
      const element11=new Element(3,null)
      const element12=new Element(3,null)

      element10.next=element11
      element11.next=element12



      const liste1=element1
      const liste2=element4
      const liste3=element10
      
      const nbNonNull=(ref2)=>{
        let  compteur=0
        for(let i=0;i<ref2.length;i++){
          if(ref2[i]!=null){compteur++}
        }

        return compteur
      }


      const MIN=(ref2)=>{
        let min=ref2[0].valeur

        for(let i=0;i<ref2.length;i++){
          if(ref2[i]!=null)
          if(min>ref2[i].valeur){
            min=ref2[i].valeur
          }
        }

        return min
      }


      const incrementer=(ref2,valeur)=>{
       for(let i=0;i<ref2.length;i++){
        if(ref2[i]!=null)
        if(ref2[i].valeur==valeur){
          ref2[i]=ref2[i].next
        }
       }
      }

      const existe1=(liste1,valeur)=>{
        let parcours=liste1

        while(parcours!=null && parcours.valeur!=valeur){
          parcours=parcours.next
        }

        return parcours==null?false:true

      }


      const fusionner=(tab1)=>{
        const references=tab1
        let tete=null
        let precedent=null

        while(nbNonNull(references)>1){
            let reserve=null
            if(tete==null){
              tete=new Element(undefined,null)
              precedent=tete
            }
            else {
              reserve=precedent
              precedent.next=new Element(undefined,null)
              precedent=precedent.next
            }
            
            const valeurMin=MIN(references) //on doit verifier que la valeur n'existe pas dans la liste
            if(!existe1(tete,valeurMin)){
              precedent.valeur=valeurMin
            }else {
              precedent=reserve
            }
        
            incrementer(references,valeurMin)

        }

        for(let i=0;i<references.length;i++){
          let tester=references[i]
          while(tester!=null){

            if(!existe1(tete,tester.valeur)){
              precedent.next=new Element(tester.valeur,null)
              precedent=precedent.next
            }

            tester=tester.next
          }

        }

        return tete
      }

      let res=fusionner([liste1,liste2,liste3])
      
      while(res!=null){
        console.log(res.valeur)
        res=res.next
      }
    }


    const pratiquer=()=>{
      //on va creer d'abord une liste  (1)=>(2)=>(3)=>(4)=>null
      let head
      const elemen1=new Element(1,null)
      const element2=new Element(2,null)
      const element3=new Element(3,null)
      const element4=new Element(4,null)
      const element5=new Element(5,null)
      const element6=new Element(6,null)
      head=elemen1
      elemen1.next=element2
      element2.next=element3
      element3.next=element4
      element4.next=element5
      element5.next=element6

      let pointeur=head
      let k=0
      let memoriser=null


      while(pointeur!=null){   //  1=>2=>3=>4=>5=>NULL
        if(pointeur.next!=null){
           const itrSuivante=pointeur.next.next

           let aux=pointeur.next
           pointeur.next=itrSuivante
           aux.next=pointeur
            

           if(k==0){
              head=aux
           }else {
              memoriser.next=aux
           }

           memoriser=pointeur
           pointeur=itrSuivante
           k++
        }else {
          break
        }

      }


    }


    const inverserListe=()=>{

      const element1=new Element(1,null)
      const element2=new Element(2,null)
      const element3=new Element(3,null)
      const element4=new Element(4,null)
      const element5=new Element(5,null)
      element1.next=element2
      element2.next=element3
      element3.next=element4
      element4.next=element5
      const head=element1
      console.log(head)

      const tableau=[element1,element2,element3,element4,element5]
      
      for(let i=0;i<Math.floor(tableau.length/2);i++){
        const aux=tableau[i]
        tableau[i]=tableau[tableau.length-i-1]
        tableau[tableau.length-i-1]=aux
      }
      
      for(let i=0;i<tableau.length-1;i++){
        tableau[i].next=tableau[i+1]
      }
      tableau[4].next=null

      console.log(tableau[0])
    }

  return (
    <div onClick={()=>{inverserListe()}}>
      <div className='border-[1px] border-black w-[200px] h-[200px] flex justify-center'>
        <div className='bg-green-400 h-[100px] shrink-0'>hajhouj tester</div>
      </div>
    </div>
  )
}

export default Pratique1