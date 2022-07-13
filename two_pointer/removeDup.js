const removeDups = (arr) =>{
  let result = 1;
  let i = 0;
  while(i < arr.length){
    if(arr[i] !== arr[result-1]){
        arr[result] = arr[i]
        result++
    }
    arr
    i++
  }
  return result
}

console.log(removeDups([4,5,6,6,7]))