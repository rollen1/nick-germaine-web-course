function saySomething(phrase) {
    console.log(phrase);
}

function getPhrase(params) {
    
    let l;

    if(params.phrase !== "undefined") {
        let l = params.phrase.length;
    }

    if(typeof params.another !== "undefined") {
        l += params.another.length;
    }

    return l;
}

let p1 = "This is a slighty longer sentence.";
let p2 = "This is a shorterr sentence.";

let computed = getPhrase({phrase: p1, another: p2});
console.log(computed);

// saySomething("Hello how are you?")

// let p = "This is a phrase."

// saySomething(p)