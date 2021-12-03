let program = document.getElementById("screen");

let numbs = (number) => {
    program.value += number;
}
let equal = () => {
    try {
        program.value = eval(program.value)
    }
    catch(err) {
        alert("Enter the valid input")
    }
}
function reset() {
    program.value = " ";
}
function del() {
    program.value = program.value.slice(0, -1);
}
