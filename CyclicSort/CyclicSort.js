function cyclic_sort(arr){
    let i = 0, n = arr.length;
    while(i<n){
        let j = arr[i] - 1;
        if(arr[i] != arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }else{
            i++
        }
    }
    return arr
}

console.log(cyclic_sort([3, 1, 5, 4, 2]))
console.log(cyclic_sort([2, 6, 4, 3, 1, 5]))