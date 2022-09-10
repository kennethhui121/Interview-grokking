function mergeIntervals(array){
  let result = [];
  array.sort((a,b) => a[0] - b[0])
  result.push(array[0])
  for(let i = 1; i<array.length; i++){
      if(result[result.length-1][1] > array[i][0]){
        result[result.length-1][1] = Math.max(result[result.length-1][1],array[i][1] )
      }
      else{
        result.push(array[i])
      }
  }
  return result
}

console.log(mergeIntervals([[1,4],[2,5],[7,9]]))