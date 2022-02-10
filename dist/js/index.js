/*Fetching the predefined value associated with each button & and printing the same value to #result */

function print(val){
    document.getElementById("result").value += val;
}

/** */
function calc(){
    let x = document.getElementById("result").value;
    let y =eval(x);
    document.getElementById("result").value = y;
}