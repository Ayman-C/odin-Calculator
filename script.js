let dataCalc={displayValue:"",oldNumber:"",newNumber:"",operator:"+"}
let operatorTable={"+":add,"-":substract,"*":multiply,"÷":divide}
numberDisplay()
clearDisplay()
operatorDisplay()

function numberDisplay() {
    const numbers=document.querySelectorAll(".numbers")
    const display=document.querySelector(".displayScreen")
    numbers.forEach(number => { 
        number.addEventListener("click", evt => { 
            console.log("before numb Calc")
            console.log(dataCalc)
            display.textContent+=evt.target.textContent;
            dataCalc.newNumber+=evt.target.textContent;
            console.log("after numb Calc")
            console.log(dataCalc)
        })
    })
}

function clearDisplay() {
    const clear=document.querySelector(".clear")
    const display=document.querySelector(".displayScreen")
    clear.addEventListener("click", evt => { 
            display.textContent="";
            dataCalc.oldNumber="";
            dataCalc.newNumber="";
            dataCalc.operator="+";
    })
}

function operatorDisplay() {
    const operators=document.querySelectorAll(".operators")
    const display=document.querySelector(".displayScreen")
    operators.forEach(operator => { 
        operator.addEventListener("click", evt => {
            console.log("before ope Calc")
            console.log(dataCalc)
            let result=operate(operatorTable[dataCalc.operator],+dataCalc.oldNumber,+dataCalc.newNumber);
            dataCalc.oldNumber=result.toString();
            dataCalc.newNumber="";
            display.textContent=(evt.target.textContent==="=") ?result : result+evt.target.textContent;
            dataCalc.operator=(evt.target.textContent==="=") ? dataCalc.operator : evt.target.textContent;
            console.log("after ope Calc")
            console.log(dataCalc)
        })    
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