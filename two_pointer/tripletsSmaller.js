function tripleSmaller(arr, target){
  arr.sort((a,b) => a-b)
  let result = 0;
  for(let i = 0; i<arr.length; i++){
    let left = i + 1, right = arr.length-1;
    while(left < right){
      let sum = arr[i] + arr[left] + arr[right]
      if(sum < target){
        result += right - left
        left++
        //result.push([arr[i],arr[left],arr[right]])
      }
      else{
        right--
      }
    }
  }
  return result
}

console.log(tripleSmaller([-1,4,2,1,3],5))