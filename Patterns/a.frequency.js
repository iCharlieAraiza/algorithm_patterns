/**
*=========================================
*       Frequency counter
*==========================================
*
*   EN: This algorythm counts every value
*       (int, floar or char) in an array 
*       and then returns the frequency of 
*       each element.
*
*   ES: Este algoritmo cuenta la frecuencia
*       de cada elementos en un array y
*       regresa la frecuencua de cada valor.
*
*   @param: aray[] 
*   @return: object{}
*
**/


getFrequency = (array)=>{
    if(array.length > 1){
        let frequency ={};
        for(let number of array){
            frequency[number] = (frequency[number])?frequency[number]+1:1;
        }
        return frequency;
    }else{
        return false;
    }
}

console.log(getFrequency([4,5,3,5]));


/*
    Value: example 

    [4,5,3,5]

    Result
    {4:1, 5:2, 3:1 }

*/