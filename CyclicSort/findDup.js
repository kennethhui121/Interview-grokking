function findDup(arr){
    let i = 0, n = arr.length;
    while(i<n){
        if(arr[i] != i+1){
            let j = arr[i] - 1;
            if(arr[i] != arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }else{
                return arr[i]
            }
        }else{
            i++
        }
    }
    return -1
}
console.log(findDup([1, 4, 4, 3, 2]))
console.log(findDup([2, 1, 3, 3, 5, 4]))