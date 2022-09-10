function missing(arr){
    let i = 0, n = arr.length;
    let results = []
    while(i<n){
        let j = arr[i]-1;
        if(arr[i] != arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }else{
            i++
        }
    }
    for(let i = 0; i<n; i++){
        if(arr[i] != i+1) results.push(i+1)
    }
    return results
}

console.log(missing([2, 3, 1, 8, 2, 3, 5, 1]))
console.log(missing([2, 4, 1, 2]))