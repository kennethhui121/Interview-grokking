function find(arr, k){
    let i = 0, n = arr.length;
    let result = []
    while(i<n){
        let j = arr[i] - 1
        if(arr[i] > 0 && arr[i] <= n && arr[i] != arr[j]){
            [arr[i],arr[j]] = [arr[j], arr[i]]
        }else{
            i++
        }
    }
    arr
    i = 0
    while(result.length >= k){
        if(arr[i] != i+1){
          result.push(i+1)
          i++
        }else{
            i++
        }
    }
    return result
}

console.log(find([3, -1, 4, 5, 5],3))