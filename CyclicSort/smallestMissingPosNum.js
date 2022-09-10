function find(arr){
    let i = 0, n = arr.length;
    while(i<n){
        let j = arr[i] - 1
        if(arr[i] > 0 && arr[i] <= n && arr[i] != arr[j]){
            [arr[i],arr[j]] = [arr[j], arr[i]]
        }else{
            i++
        }
    }
    for(let i =0; i<n; i++){
        if(arr[i] != i+1) return i+1
    }
    return -1
}

console.log(find([-3, 1, 5, 4, 2]))