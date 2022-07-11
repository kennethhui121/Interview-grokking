/*Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].
*/

const smallestSubArr = (arr,s) =>{
  let minLength = Infinity;
  let sum = 0, end = 0;
  for(let i = 0; i<arr.length; i++){
    sum += arr[i]
    while(sum >= s){
      minLength = Math.min(minLength, i-end+1)
      sum -= arr[end]
      end++
    }
  }
  return minLength
}

console.log(smallestSubArr([2, 1, 5, 2, 8], 7))