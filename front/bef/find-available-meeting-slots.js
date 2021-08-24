// https://bigfrontend.dev/problem/find-available-meeting-slots
// type Interval = [number, number]

/**
 * @param {Interval[][]} schedules
 * @return {Interval[]}
 */
function findMeetingSlots(schedules) {
    // your code here
    schedules = schedules.flat().sort(([a1], [a2]) => a1 - a2);
    const result = [];
    let prevEnd = 0;

    for (let [start, end] of schedules) {
        if (prevEnd < start) {
            result.push([prevEnd, start]);
        }
        prevEnd = Math.max(prevEnd, end);
    }
    if (prevEnd !== 24) result.push([prevEnd, 24]);

    return result;
}

  // console.log(findMeetingSlots([
  //   [[13,15], [11,12], [10,13]], //schedule for member 1
  //   [[8, 9]], // schedule for member 2
  //   [[13, 18]] // schedule for member 3
  // ]));