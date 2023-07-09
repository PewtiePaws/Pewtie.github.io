let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("secondNum");

let operator = document.getElementById("operator");

let caculateBtn = document.getElementById("caculateBtn");
let result = document.getElementById("result");



caculateBtn.addEventListener("click",caculate);


function caculate(){

    let answer;

    let num1 = firstNumber.value;
    let num2 = secondNumber.value;

    if(operator.value=="+")
    {
        answer = parseFloat(num1) + parseFloat(num2);
    }
    else if(operator.value=="-")
    {
        answer = parseFloat(num1) - parseFloat(num2);
    }
    else if(operator.value=="*")
    {
        answer = parseFloat(num1) * parseFloat(num2);
    }
    else if(operator.value=="/")
    {
        answer = parseFloat(num1) / parseFloat(num2);
    }
   
    result.innerText = answer;
}

