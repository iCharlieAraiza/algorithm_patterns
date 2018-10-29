/**
 * Count unique values of an array
 * 
**/


function countUniqueValues(array){
    if(!array.length){
        return 0;
    }


    let left =0,
        right= 1,
        inter= 0;
    //While: right <= array.length
    while(right <= array.length){
        inter++;
        if(array[left] === array[right]){
            
            //console.log(inter,'Right (val): ',array[right], 'Right (pointer): ',right);
            right++;
        }else {
            
            //console.log(inter,'Left (val): ',array[left],'Right (val): ',array[right], 'Left (pointer): ',left)
            left++;
            array[left] = array[right];
        }
    }
    //->If: array[left] === array[right] : right++
    //<-Else: array[left] !== array[right] : left++
    return left;
} 

console.log(countUniqueValues([-2, -1, -1, 1, 1, 1, 1, 2, 4, 4, 6, 6, 6, 7, 8, 9, 9, 9, 10 ]) );  // 9

//countUniqueValues([1, 1, 1, 1, 1, 4, 4, 6]) // 3