function closestSum (arr, target){
  arr.sort((a,b) => a-b);
  let closest = Infinity;
  for(let i = 0; i<arr.length; i++){
    let left = i+1, right = arr.length-1;
    while(left < right){
      let sum = arr[i] + arr[left] + arr[right];
      if(Math.abs(target - sum) <= Math.abs(closest) || Math.abs(target - sum) === Math.abs(closest) && (target - sum) > closest){
        closest = sum
        }  
      if(sum > target)right--
      else{
        left++
      }
    }
  }
  return closest
}

console.log(closestSum([-3, -1, 1, 2],1))