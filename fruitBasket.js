const fruitBasket = (arr) =>{
  let max = 0, end = 0;
  let cache = {};
  for(let i = 0; i<arr.length; i++){
    (!cache[arr[i]]) ? cache[arr[i]] = 1 : cache[arr[i]]++
    while(Object.keys(cache).length > 2){
      cache[arr[end]]--
      if(cache[arr[end]] === 0){
          delete cache[arr[end]]
      }
      end++
    }
    
    let sum = 0;
    for(const key in cache){
      sum += cache[key]
    }
    max = Math.max(max, i-end+1 )
  }
  return max
}

console.log(fruitBasket(['A', 'B', 'C', 'A', 'C']))
console.log(fruitBasket(['A', 'B', 'C', 'B', 'B', 'C']))