/**
* Anagram cheker using frequency pattern
*
**/


function anagram(str, str2){

    if(str.length !== str2.length){
        return false;
    }
    
    const word1 ={};
    
    for(let val of str){
        word1[val] = (word1[val]>0)?word1[val]+1: 1;
    }

    for(let val of str2){        
        //Zero doesn't exist
        if(!word1[val]){
            return false;
        }else{
            word1[val]=word1[val]-1;
        }
    }
    
    return true;

}

console.log(anagram('casatp','spacya'));





//Comprobar que cuenta cada uno de los elmentos coincida