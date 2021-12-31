let inputA="";
let inputB="";
let operator="";
let rounding=10000;
let operatorTable={"+":add,"-":substract,"*":multiply,"÷":divide,"":nullOperator}
const maxDisplay=document.querySelector(".displayScreen").clientWidth;
const display=document.querySelector(".displayInput")
const alertMsg=document.querySelector(".alertMsg")
numberDisplay()
clear()
operatorDisplay()
percentage()
comma()
toggleSign()
clearLast()

function numberDisplay() {
    const numbers=document.querySelectorAll(".numbers")
    numbers.forEach(number => { 
        number.addEventListener("click", evt => { 
            display.textContent+=evt.target.textContent;
            selectInput(operator,evt.target.textContent)
            if (maxWidthBreach(display.clientWidth)) {
                return
            }
        })
    })
}
function maxWidthBreach(displayWidth) {
    if (displayWidth>maxDisplay) {
        alertMsg.textContent="Error Max display reached";
        display.textContent=display.textContent.slice(0,display.textContent.length-1)
        if (operator==="") {
            inputA=display.textContent;
        }
        else if(inputB!=="") {
            inputB=inputB.slice(0,inputB.length-1);
        }
        return true;
    }
    else{
        alertMsg.textContent="";
        return false;
    }
}

function clear() {
    const clear=document.querySelector(".clear")
    clear.addEventListener("click", evt => { 
            display.textContent="";
            inputA="";
            inputB="";
            operator="";
            alertMsg.textContent="";
    })
}
function clearLast() {
    const clearLast=document.querySelector(".clearLast")
    clearLast.addEventListener("click", evt => { 
        if (operator==="") {
            inputA=inputA.slice(0,inputA.length-1);
            display.textContent=inputA;
        }
            inputB=inputB.slice(0,inputB.length-1);
            display.textContent=inputA + operator + inputB;
        }    
        alertMsg.textContent="";
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
            if (maxWidthBreach(display.clientWidth)) {
                display.textContent="Error";
                return
            }
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
            if (maxWidthBreach(display.clientWidth)) {
                return
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
        if (maxWidthBreach(display.clientWidth)) {
            return
        }
    })
}
function operate(operator,x,y) {
    return  Math.round(operator(x,y)*rounding)/rounding
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

function selectInput(condition,inputValue){
    if (condition===""){
        return inputA+=inputValue;
    }
    else{
        return inputB+=inputValue;
    }

}