//let data={inputA:"",inputB:"",operator:""}
let inputA="";
let inputB="";
let operator="";

let operatorTable={"+":add,"-":substract,"*":multiply,"÷":divide,"":nullOperator}
const display=document.querySelector(".displayScreen")
numberDisplay()
clear()
operatorDisplay()
percentage()


function numberDisplay() {
    const numbers=document.querySelectorAll(".numbers")
    numbers.forEach(number => { 
        number.addEventListener("click", evt => { 
            display.textContent+=evt.target.textContent;
            if (operator==="") {
                inputA+=evt.target.textContent;
                console.log("we are in numbDisp A")
                console.log(inputA);
                console.log(inputB);
                console.log(operator);
            }
            else {
                inputB+=evt.target.textContent;
                console.log("we are in numbDisp B")
                console.log(inputA);
                console.log(inputB);
                console.log(operator);
            }
        })
    })
}

function clear() {
    const clear=document.querySelector(".clear")
    clear.addEventListener("click", evt => { 
            display.textContent="";
            inputA="";
            inputB="";
            operator="";
    })
}

function operatorDisplay() {
    const operators=document.querySelectorAll(".operators")
    operators.forEach(operatorSign => { 
        operatorSign.addEventListener("click", evt => {
            let newOperator=evt.target.textContent;
            if (inputB===""){
                operator=(newOperator==="=") ? "" : newOperator;
                display.textContent=inputA+newOperator;
                return 
            }
            else {
                inputA=operate(operatorTable[operator],+inputA,+inputB);
                inputB="";
                operator= (newOperator==="=") ? "" : newOperator
                display.textContent=inputA+operator;
                return
            }
        })    
    })
}
function percentage() {
    const percentageBtn=document.querySelector(".percentage")
    const display=document.querySelector(".displayScreen")
    
        percentageBtn.addEventListener("click", evt => { 
            display.textContent+=evt.target.textContent;
            inputB=inputB/100;
        })
}

function operate(operator,x,y) {
    return operator(x,y)
}

function add(x,y) {
    return x+y;
}
function substract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}
function nullOperator(x,y){
    return
}