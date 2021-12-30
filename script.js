let dataCalc={totalNumber:"",newNumber:"",operator:"+"}
let operatorTable={"+":add,"-":substract,"*":multiply,"÷":divide,"":null}
const display=document.querySelector(".displayScreen")
numberDisplay()
clear()
operatorDisplay()
percentage()
// clearBtnDisplay()

function numberDisplay() {
    const numbers=document.querySelectorAll(".numbers")
    numbers.forEach(number => { 
        number.addEventListener("click", evt => { 
            display.textContent+=evt.target.textContent;
            dataCalc.newNumber+=evt.target.textContent;
        })
    })
}

function clear() {
    const clear=document.querySelector(".clear")
    clear.addEventListener("click", evt => { 
            display.textContent="";
            dataCalc.totalNumber="";
            dataCalc.newNumber="";
            dataCalc.operator="+";
    })
}

function operatorDisplay() {
    const operators=document.querySelectorAll(".operators")
    operators.forEach(operator => { 
        operator.addEventListener("click", evt => {
            if (dataCalc.newNumber===""){
                dataCalc.operator=(evt.target.textContent==="=") ? dataCalc.operator : evt.target.textContent;
                display.textContent=dataCalc.totalNumber+dataCalc.operator
                return
             }
            dataCalc.totalNumber=operate(operatorTable[dataCalc.operator],+dataCalc.totalNumber,+dataCalc.newNumber);;
            dataCalc.newNumber="";    
            display.textContent=(evt.target.textContent==="=") ? dataCalc.totalNumber : dataCalc.totalNumber+evt.target.textContent;
            dataCalc.operator=(evt.target.textContent==="=") ? dataCalc.operator : evt.target.textContent;
            console.log(dataCalc)
        })    
    })
}
function percentage() {
    const percentageBtn=document.querySelector(".percentage")
    const display=document.querySelector(".displayScreen")
    
        percentageBtn.addEventListener("click", evt => { 
            display.textContent+=evt.target.textContent;
            dataCalc.newNumber=dataCalc.newNumber/100;
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