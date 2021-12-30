let inputA="";
let inputB="";
let operator="";

let operatorTable={"+":add,"-":substract,"*":multiply,"÷":divide,"":nullOperator}
const display=document.querySelector(".displayScreen")
numberDisplay()
clear()
operatorDisplay()
percentage()
comma()
toggleSign()

function numberDisplay() {
    const numbers=document.querySelectorAll(".numbers")
    numbers.forEach(number => { 
        number.addEventListener("click", evt => { 
            display.textContent+=evt.target.textContent;
            if (operator==="") {
                inputA+=evt.target.textContent;
                console.log(typeof inputA)
            }
            else {
                inputB+=evt.target.textContent;
                console.log(typeof inputB)
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
            if (inputB!=="") {
                inputA=operate(operatorTable[operator],+inputA,+inputB).toString();
                inputB="";
            }
            operator= (newOperator==="=") ? "" : newOperator
            display.textContent=inputA+operator;
            console.log(typeof inputA)
        })    
    })
}
function percentage() {
    const percentageBtn=document.querySelector(".percentage")
    percentageBtn.addEventListener("click", evt => { 
        if(inputA!=="" && operator==="") {
                inputA/=100;
                display.textContent+="%";
            }
            else if (inputB!=="") {
                inputB/=100;
                display.textContent+="%";
            }
        })
}

function toggleSign() {
    const sign=document.querySelector(".toggle")
    sign.addEventListener("click", evt => { 
        if (operator==="") {
            inputA=(-inputA).toString();
            display.textContent=inputA;
        }
        else {
            inputB=(-inputB).toString();
            display.textContent=inputA+operator+"("+inputB+")";
        }    
    })
}

function comma() {
    const comma=document.querySelector(".comma")
    comma.addEventListener("click", evt => { 
        if (operator==="" && !inputA.includes(".")) {
            inputA+=".";
            display.textContent+=".";
        }
        else if (!inputB.includes(".")) {
            inputB+=".";
            display.textContent+=".";
        }    
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