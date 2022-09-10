function missing(arr){
    let i = 0, n = arr.length;
    while(i<n){
        let j = arr[i];
        if(arr[i] < n && arr[i] != arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }else{
            i++
        }
    }
    for(let i = 0; i<n; i++){
        if(arr[i] != i) return i
    }
    return -1
}

console.log(missing([4, 0, 3, 1]))
console.log(missing([8, 3, 5, 2, 4, 6, 0, 1]))