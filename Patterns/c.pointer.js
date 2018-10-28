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
          right = array.length-1,
          sum;
      
        while(left<right){
            sum = array[left] + array[right]
            if(sum === 0){
                return [array[left], array[right]];
            }else if(sum<0){
                left++;
            }else{
                right--;
            }
      }

      return false;
  }


//Test

const array = [-8, -5, -1, 0, 1, 2, 3];

console.log(sum(array))

  // sum([-3,- -2, -1, 0, 1, 2, 3]); [-3,3]