/**==========================
 *  Pointer pattern
 *===========================
 * 
 *  EN: This pattern compares
 *  the external elements of
 *  an array.  
 **/


 /**
  * Delete sum elements
  * 
  * @argument array[sort_list]
  * @return array[pair component]
  **/

  function sum(array){
      if(array.length <1){
          return false;
      }

      let left = 0,
          right = array.length-1;
      
        while(left<right){
          //if(array[left] + array[right] === 0)
          if(array[left] + array[right] === 0)
          {
            return [array[left], array[right]];
          }else{
              left++;
              right--;
          }
      }

      return false;
      //(If) Un condicional: si array[left] + array[right] === 0, return [array[left], array[right]]
      //(Else) Si no, left++, rigth--

      //Se termina el ciclo while. Retorna false;
  }

const array = [-8, -3, -1, 0, 1, 2, 3];

console.log(sum(array))

  // sum([-3,- -2, -1, 0, 1, 2, 3]); [-3,3]