findAllDup = arr =>{
    let i =0, n = arr.length, result = [];
    while(i<n){
        let j = arr[i] - 1;
        if(arr[i] != arr[j]){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }else{
            i++
        }
    }
    for(let i = 0; i<n; i++){
        if(arr[i] != i+1) result.push(arr[i])
    }
    return result
}

console.log(findAllDup([3, 4, 4, 5, 5]))