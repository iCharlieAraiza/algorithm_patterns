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


//  función que encuentra un patrón dentro del array

 const sumElement = (array, el)=>{
    //Verificar que el largo del array sea mayor o igual a el => retrurn false.
    if(array.length < el){
        return null;
    }
    
    //Declarar valor suma, max, index, resultArray.
    let sum = 0,
          max = -Infinity,
          index = 0;

    const resultArray = [];

    //!= For recorrer el array de i<=el
    for(let i=0; i<=el-1; i++){
    //->suma = suma + array[i]
        sum = sum + array[i]
    }
    // max = suma;
    max = sum;

    //!= For el+1 <= array.lenght
    for(i=el; i<= array.length; i++){
    //->suma->suma = suma + array[i] - array[i-3]
        sum = sum + array[i] - array[i-el];
    //->!= If: suma > max ? max = suma, index = i
        console.log("Elemento i", i, "Suma ", sum);
        if(sum>max){
            max = sum;
            index = i-el+1;
        }
    }

    //!= For i=index; i<index+el; i++
    for(i= index; i<index+el; i++){
    //->push en resultArray el array[i] 
    resultArray.push(array[i])
    }

    return resultArray;

 }



const result = sumElement([4, 1, 2, 444, 5, 5, 12, 3],4)     // [4, 5, 5]
console.log(result);