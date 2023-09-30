// function submitFunction() {
//     const input = document.querySelector('#inputBox');
//     const output = document.querySelector('#output');

//     output.innerHTML = input.value;
// }    
    
// const submit = document.querySelector('#submitButton');
// submit.addEventListener('click', submitFunction);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    // how do we know which key was pressed?
    console.log(e.keyCode);
    // checkout e.code, e.key, and e.keyCode
    // what is the difference?
}