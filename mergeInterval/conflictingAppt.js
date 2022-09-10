function appointment(arr){
  //sort the array
  arr.sort((a,b) => a[0] - b[0]);
  let i = 1;
  while(i < arr.length){
    if(arr[i-1][1] > arr[i][0]) return false
    i++
  }
  //loop through the array and see if i[1] is less than i+1[0]. if we make it to the end of the array, then it its true
  //return false otherwise
  return true
}
let appointments = [[1,4], [2,5], [7,9]]
console.log(appointment(appointments))

appointments = [[6,7], [2,4], [8,12]]
console.log(appointment(appointments))

appointments = [[4,5], [2,3], [3,6]]
console.log(appointment(appointments))

function conflicts(arr){
    //sort the array
    arr.sort((a,b) => a[0] - b[0]);
    let result = []
    let i = 1;
    while(i < arr.length){
      if(arr[i-1][1] > arr[i][0]) result.push(arr[i-1],arr[i])
      i++
    }
    //loop through the array and see if i[1] is less than i+1[0]. if we make it to the end of the array, then it its true
    //return false otherwise
    return result
}

appointments = [[1,4], [2,5], [7,9]]
console.log(conflicts(appointments))