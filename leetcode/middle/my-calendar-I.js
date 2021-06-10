// https://leetcode.com/problems/my-calendar-i/
// var MyCalendar = function() {
//     this.events = [];
// };

// /** 
//  * @param {number} start 
//  * @param {number} end
//  * @return {boolean}
//  */
// MyCalendar.prototype.book = function(start, end) {
//     for (let event of this.events) {
//         // if (start >= event.start && start < event.end) return false;
//         if (end > event.start && start < event.end) return false;
//         // if (start < event.start && end > event.start) return false;
//     }

//     this.events.push({ start, end });
//     return true;
// };


var MyCalendar = function() {
    this.root = null;
};

var Node = function(s,e) {
    this.value = [s,e];
    this.left = null;
    this.right = null;
}

MyCalendar.prototype.book = function(start, end) {
    if(!this.root) {
        this.root = new Node(start, end);
        return true;
    }
    
    let currNode = this.root;

    while(currNode) {
        if(currNode.value[0] < end && start < currNode.value[1]) {
            return false;
        }
        
        if(start < currNode.value[0]) {
            if(!currNode.left) {
                currNode.left = new Node(start, end);
                return true;
            }

            currNode = currNode.left;            
        } else {
             if(!currNode.right) {
                currNode.right = new Node(start, end);
                 return true;
            }
            
            currNode = currNode.right;
        }
    }
};
