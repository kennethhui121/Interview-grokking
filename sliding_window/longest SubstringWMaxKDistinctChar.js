/*Given a string, find the length of the longest substring in it with no more than K distinct characters.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

*/

function longestSubstringWithKDistinct(str){
    let arr = new Set()
    let i = 0, j = 0, longest = 0;
    while(i < str.length){
      if(arr.has(str[i])){
          arr.delete(str[j])
          j++
      }else{
          arr.add(str[i])
          longest = Math.max(arr.size, longest)
          i++
      }
    }    
    return longest
}
 
function non_repeat_substring(str) {
    let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning so that
      // we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
        console.log(rightChar);
        // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
        // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        console.log(charIndexMap[rightChar])
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        console.log(windowStart)
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      charIndexMap
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }

console.log(non_repeat_substring('aabccbbee'))

console.log(longestSubstringWithKDistinct('abbbb'))

//console.log(non_repeat_substring('abbbb'))