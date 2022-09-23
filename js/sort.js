let numbers = [43, 56, 601, 100, 45, 10, 58, 34];

let words = ["Apple", "Pear", "Coconut", "Pizza", "Banana"];

// method alphabet

// numbers.sort() 
// words.sort()

numbers.sort(function(a, b){ return a - b; });

let myNumbers = [3, 8, 7, 9, 6, 0, 12, 18, 5, 4, 14, 2, 19, 16, 11, 10, 13, 17, 20];

function missingNumber(myNumbers) {
    let missing = -1;
    let sorted = numbers.sort(function(a, b) { return a - b; })

    for(let i = sorted[0]; i <= numbers.length; i++) {
        if(numbers.indexOf(i) === -1) {
            missing = i;
        }
    }

    return missing;
}

console.log(missingNumber(myNumbers))