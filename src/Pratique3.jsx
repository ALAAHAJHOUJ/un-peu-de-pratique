import React, { useEffect } from 'react'

function Pratique3() {
    var removeDuplicates = function(nums) {

            const supprimer=(indice)=>{
                const tabAux=nums

                if(indice==nbElements-1) tabAux.pop()
                for(let i=indice;i<tabAux.length-1;i++){
                    tabAux[i]=tabAux[i+1]
                }

            }



            let nbElements=nums.length

            for(let i=0;i<nbElements;i++){

                let j=i

                while(j<nbElements){

                    if(i!=j && nums[i]==nums[j]){
                        supprimer(j)
                        nbElements--
                        nums.pop()
                    }else {
                        j++
                    }

                }

            }

            const tab1=[]
            for(let i=0;i<nbElements;i++){
                tab1.push(nums[i])
            }


            return tab1
    };


    const supprimer=(nums,val)=>{

        const supprimer=(indice)=>{
                for(let i=indice;i<nums.length-1;i++){
                    nums[i]=nums[i+1]
                }
                nums.pop()
        }

        let nbElements=nums.length
        let k=0

        while(k<nbElements){
            if(nums[k]==val){
                supprimer(k)
                nbElements--
            }else {
                k++
            }
            console.log(nums)
        }

        return [nbElements,nums]
    }

    const probleme=(divident,divisor)=>{
        let tester=Math.abs(divisor)
        let compteur=0

        while(Math.abs(tester)<=Math.abs(divident)){
            compteur++
            tester+=Math.abs(divisor)
        }

        const resultat=divisor*divident
        const signe=resultat<0?"-":""

        if(compteur==0){
            console.log(compteur)
        }
        else {
            console.log(signe+compteur)
        }
        console.log(2**4)

    }

    const supprimerEle=(tab1,indice)=>{

        const tabAux=[...tab1]

        for(let i=indice;i<tabAux.length-1;i++){
            tabAux[i]=tabAux[i+1]
        }

        tabAux.pop()
        return tabAux
    }



    const probleme2=(text,tableau)=>{
       const tableau1=[]

       //[ele1,ele2,ele3]


       const generer=()=>{

            const combinaison=(chaine,tab2)=>{
                    
                    if(tab2.length>0)
                    for(let i=0;i<tab2.length;i++){
                        combinaison(chaine+tab2[i],supprimerEle(tab2,i))
                    }
                    else 
                    {    
                        tableau1.push(chaine)
                    }

            }

            for(let i=0;i<tableau.length;i++){
                    combinaison(tableau[i],supprimerEle(tableau,i))
            }

           }

       

       generer()

       const taille=tableau1[0].length
       const resultat=[]


       for(let i=0;i<text.length;i++){

         if(tableau1.includes(text.slice(i,i+taille))){
           resultat.push(i)
         }

       }
       
      console.log(resultat)
      
    }




    const NextPer=(tab3)=>{
        const tab=tab3
        const resultat=[]
        

        
        const generer=(element,tab2)=>{
            if(tab2.length>0){
                for(let i=0;i<tab2.length;i++){
                    generer(""+element+","+tab2[i],supprimerEle(tab2,i))
                }
            }
            else {
                resultat.push(element)
            }

        }


        for(let i=0;i<3;i++){
            generer(tab[i],supprimerEle(tab,i))
        }

        console.log(resultat)
    }



        function nextPermutation(nums) {
            let i = nums.length - 2;
            // 1) Trouver le premier indice i tel que nums[i] < nums[i+1]  

            //[1,2,3,4]  [1,2,4,3] [1,]

            while (i >= 0 && nums[i] >= nums[i + 1]) {i--};

            if (i >= 0) {
                // 2) Trouver j > i tel que nums[j] > nums[i]
                let j = nums.length - 1;
                while (nums[j] <= nums[i]) {
                    j--;
                }

                // 3) Échanger nums[i] et nums[j]
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }

            // 4) Inverser la partie après i
            let left = i + 1, right = nums.length - 1;
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++; right--;
            }

            console.log(nums)
        }




        const tester132=(tab4)=>{
            const resultat=[]
            const Aux=[]

            const combinaison=()=>{
                if(Aux.length==3){
                    return resultat.push([...Aux])
                }

                for(let i=0;i<tab4.length;i++){
                    if(!Aux.includes(tab4[i])){
                        Aux.push(tab4[i])  
                        combinaison()
                        Aux.pop()
                        break
                    }
                }
            } 


            combinaison()

            console.log(resultat)

        }


        const parenth=()=>{

            const verifier=(chaine1)=>{
                const pile=[]

                for(let i=0;i<chaine1.length;i++){
                    if(chaine1[i]=="("){
                         pile.push("(")
                    }else {
                         if(pile.length==0){
                            return "nonvalide"
                         }
                         else {
                            pile.pop()
                         }
                    }
                }
                if(pile.length==0)
                  return "valide"
                else 
                  return "nonvalide"
            }

            let MAX=0
            const text="())))))))"

            for(let i=0;i<text.length;i++){
                let chaine=text[i]
                for(let j=i+1;j<text.length;j++){
                    chaine+=text[j]
                    if(verifier(chaine)=="valide") {
                        if(MAX<=chaine.length){
                            MAX=chaine.length
                        }
                    }
                }
            }

            console.log(MAX)
        }
        

        var searchRange = function(nums, target) {
            const resultat=[]
            let i=0
            while(i<nums.length && nums[i]<=target){

                if(nums[i]==target){
                    resultat.push(i)
                }

                i++
            }


            if(resultat.length==0){
                resultat.push(-1)
                resultat.push(-1)
                    return resultat
            }else if(resultat.length==1){
                resultat.push(resultat[0])
                return resultat
            }else {
                resultat[1]=resultat[resultat.length-1]
                resultat.length=2
                return resultat
            }


        };

        var searchInsert = function(nums, target) {
            let i=0
            while(i<nums.length && nums[i]<target)
            {
                if(target==nums[i]){
                    return i
                }
                i++
            }


            if(i<nums.length){
            return i
            }
            else {
             let tester32=nums[i-1]+1
             while(tester32!=target){
                 tester32+=1
                 i++
             }
             return i
            }
            
            

        };
  return (
    <div className='border-[1px] p-6 rounded-[10px] bg-black hover:bg-gray-400 text-white cursor-pointer' onClick={()=>{console.log(searchInsert([1,3,5,6],9))}}>
      Pratique3
    </div>
  )
}

export default Pratique3