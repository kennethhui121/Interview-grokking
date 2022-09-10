function overLap(a,b){
    let result = [];
    let first = 0, second = 0;
    while(first < a.length && second < b.length){
        start = Math.max(a[first][0], b[second][0]);
        end = Math.min(a[first][1], b[second][1]);
        if(start < end) result.push([start, end]);

        if(a[first][1] > b[second][1]) second++
        else{first++}
    }
    return result
}
let arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]];
console.log(overLap(arr1,arr2))