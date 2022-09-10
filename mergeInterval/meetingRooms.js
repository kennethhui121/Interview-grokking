function meetingRooms(intervals){
    //sort arr
    // arr.sort((a,b) =>a[0] - b[0])
    // let results = []
    // results.push(arr[0])
    // for(let i = 1; i<arr.length; i++){
    //   let interval = arr[i]
    //   if(results[results.length-1][1] > interval[0]){
    //     results[results.length-1][1] = Math.max(results[results.length-1][1], interval[1])
    //   }else{
    //     results.push(interval)
    //   }
    // }
    // let total = arr.length - results.length + 1
    // for(let i = 1; i<results.length; i++){
    //   if(results[i-1][1] > results[i][0]) total++
    // }
    // //check to see if [i] meeting timee overlaps with any interals after it
    // //continue previous step with [i+1]
    // return total

        var starts = intervals.concat().sort(function(a, b) {
            return a.start - b.start;
        });
        var ends = intervals.sort(function(a, b) {
            return a.end - b.end;
        });
        var rooms = 0;
        var end = 0;
        for (var i = 0; i < intervals.length; i++) {
            if (starts[i].start < ends[end].end) {
                rooms++;
            } else {
                end++;
            }
        }
        return rooms;

}
let Meetings =  [[1,4], [2,5], [7,9]]
console.log(meetingRooms(Meetings))

Meetings =  [[6,7], [2,4], [8,12]]
console.log(meetingRooms(Meetings))

Meetings = [[1,4], [2,3], [3,6]]
console.log(meetingRooms(Meetings))

Meetings = [[4,5], [2,3], [2,4], [3,5]]
console.log(meetingRooms(Meetings))