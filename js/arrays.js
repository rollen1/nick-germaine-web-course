// onclick="buttonClicked()" in html attribute

const btn = document.getElementById("go-button");

// input to text function

function buttonClicked() {
    console.log("Button clicked.");

    const customText = document.getElementsByClassName("my-input");
    const textArea = document.getElementsByClassName("my-textarea");
    const results = document.getElementById("text");

    results.innerHTML = customText[0].value + "<br />";
    results.innerHTML += "Message: " + textArea[0].value;

    // btn.removeEventListener("click", buttonClicked);
    // document.getElementById("text").innerHTML = "Don't do it!"
    // console.log(document.getElementById("text").innerHTML);
}

btn.addEventListener("click", buttonClicked);





// const hobbies = ["food", "gaming", "reading", "programming", "music"];

// hobbies.push("archery");
// console.log(hobbies.shift());

// hobbies.unshift("blacksmithing");

// console.log(hobbies);
// console.log("I no longer enjoy", hobbies.pop());

// hobbies.forEach(function(i, ie){
//     console.log("I like", i, ie);
// });

// if(hobbies.indexOf('reading') > -1) {
//     console.log("I like reading!")
// }

// if(hobbies.indexOf('sports') === -1) {
//     console.log("Not in array")
// }

// let indexNum = hobbies.indexOf("reading")

// hobbies.splice(indexNum, 1)

// hobbies.splice(1, 3);