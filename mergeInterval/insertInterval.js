var insert = function (arr, newInterval) {
    if (arr.length === 0) {
        return [ newInterval ];
    }

    const result = [];
    let flag = 0;
    let i;

    for (i = 0; i < arr.length; i++) {
      const interval = arr[i];
      if(newInterval[0] > interval[1]) result.push(interval)
      else if(newInterval[1] < interval[0]){
          result.push(newInterval);
          flag = 1
          break;
      }
      else{
          newInterval[0] = Math.min(newInterval[0], interval[0]);
          newInterval[1] = Math.max(newInterval[1], interval[1])
      }
    }  
    
    if(flag === 0){
        result.push(newInterval);
        return result
    }else{
        return result.concat(arr.splice(i))
    }
};

let interval = [[0,3],[4,8],[6,9],[10,7]]
let inst = [2,6]
console.log(insert(interval,inst))