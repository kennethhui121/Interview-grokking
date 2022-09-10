var minMeetingRooms = function(intervals) {
	let starts = intervals.map(a=>a[0]).sort((a,b) => a - b)
    let ends = intervals.map(a=>a[1]).sort((a,b) => a - b)
    starts
    ends
	var rooms = 0;
	var end = 0;
	for (var i = 0; i < intervals.length; i++) {
		if (starts[i] < ends[end]) {
			rooms++;
		} else {
			end++;
		}
	}
	return rooms;
};

let Meetings =  [[4,5], [2,3], [2,4], [3,5]]
console.log(minMeetingRooms(Meetings))