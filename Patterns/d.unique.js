/**
 * Count unique values of an array
 * 
**/


function countUniqueValues(array){
    if(!array.length){
        return 0;
    }


    let j= 0;
    
    for(i=0; i<array.length; i++){
        if(array[i] !== array[j]){
            j++;
            array[j] = array[i];
        }
    }
    
    // while(right <= array.length){
    //     if(array[left] === array[right]){
            
    //         //console.log(inter,'Right (val): ',array[right], 'Right (pointer): ',right);
    //         right++;
    //     }else {
            
    //         //console.log(inter,'Left (val): ',array[left],'Right (val): ',array[right], 'Left (pointer): ',left)
    //         left++;
    //         array[left] = array[right];
    //     }
    // }
    return j+1;
} 

console.log(countUniqueValues([-2, -2, -1, -1, 0, 1, 1, 1, 1, 2, 4, 4, 6, 6, 6, 7, 8, 9, 9, 9, 10, 10  ]) );  // 9

//countUniqueValues([1, 1, 1, 1, 1, 4, 4, 6]) // 3