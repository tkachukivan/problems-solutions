/**
 * https://leetcode.com/problems/keys-and-rooms/
 * can use stack or recurtion, similar performance
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const visitedRooms = new Array(rooms.length);
    let visited = 0;
    // visit(0);
    let stack = [0];
    
    while(stack.length) {
        let current = stack.pop();
        if (visitedRooms[current]) continue;
        visitedRooms[current] = true;
        visited++;
        rooms[current].forEach(r => stack.push(r));
    }
    
    
    return visited === rooms.length;
    
    // function visit(room) {
    //     if (visitedRooms[room]) return
    //     visitedRooms[room] = true;
    //     visited++;
    //     rooms[room].forEach(r => {
    //         if (!visitedRooms[r]) visit(r)
    //     });
    // }
};