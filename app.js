var InputValue = document.getElementById("inpDisplay");


function btnValue(val) {
    InputValue.value += val;

}

function isequalsto() {
    var a = InputValue.value;
    var answer = eval(a);
    InputValue.value = answer;
}
function clearAll() {
   InputValue.value = "";
}