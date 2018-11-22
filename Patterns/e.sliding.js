/**========================================
 *              Sliding patter 
 * ========================================
 * 
 * @type: Complexity lineal. O(n)
 * 
 * @description: This pattern changes the
 *               position of a sequence into
 *               an array.
 * 
 **/


/**
 * Sum Function
 * 
 * @param: array[num], number
 * @returns: array[num] || Null 
 * 
 * 
 * 
 **/

 const sumElement = (array, el)=>{
    if(array.length < el){
        return null;
    }
    
    let sum = 0,max = -Infinity, index = 0;
    const resultArray = [];

    for(let i=0; i<=el-1; i++){
        sum = sum + array[i]
    }

    max = sum;

    // Checking the max value
    for(i=el; i<= array.length; i++){
        sum = sum + array[i] - array[i-el];

        if(sum>max){
            max = sum;
            index = i-el+1;
        }

    }

    //Create the new Array
    for(i= index; i<index+el; i++){
        resultArray.push(array[i])
    }

    return resultArray;

 }



const result = sumElement([4, 1, 2, 444, 5, 5, 12, 3],4)     // [4, 5, 5]
console.log(result);