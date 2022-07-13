function threeSumZero(array){
  array.sort((a,b) => a-b)
  let result = [];
  for(let i = 0; i<array.length; i++){
    let left = i+1, right = array.length-1;
    while(left < right){
      let sum = array[i] + array[left] + array[right];
      if(sum > 0){
        right--
      }else if(sum < 0){
        left++
      }else{
        result.push([array[i], array[left], array[right]]);
        while(array[left] === array[left+1]) left++
        while(array[right] === array[right-1]) right--
        left++
        right--
      }
    }    
  }
  return result
}

console.log(threeSumZero([-3, 0, 1, 2, -1, 1, -2]))