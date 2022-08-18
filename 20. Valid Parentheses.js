var isValid = function(s) {
    const map = { 
        '(':')', '{':'}', '[':']', 
    }
    let stack = []
    for(let count of s){
        if(count in map){
            stack.push(count)
        } else if (map[stack.pop()] !== count){
            return false
        }
    }
    return !stack.length
};

//time O(n)
//space O(n)