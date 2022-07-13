const makeSquare = (arr) =>{
  const result = Array(arr.length).fill(0)
  let left = 0, right = arr.length-1, n = arr.length-1
  while(left < right){
      if(arr[left]*arr[left] < arr[right]*arr[right]){
        result[n] = arr[right]*arr[right];
        right--
      }else{
        result[n] = arr[left]*arr[left]
        left++
      }
    n--
  }
  return result
}

console.log(makeSquare([-2,-1,2,3]))