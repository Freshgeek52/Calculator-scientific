function display(val){
    const displayvalue = document.getElementById('result')
    displayvalue.value += val
}

function solve(){
    const displayvalue = document.getElementById('result')
    let x = displayvalue.value
    let y = eval(x)
    displayvalue.value = y
}

function del(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = ''
}

function x2(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,2)
}

function x3(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,3)
}

function x4(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,4)
}

function x5(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,5)
}

function x6(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,6)
}

function x7(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,7)
}

function x9(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,9)
}


function root(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.sqrt(displayvalue.value)
}

function cube(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.cbrt(displayvalue.value,1/3)
}

function four(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,1/4)
}

function five(){
    const displayvalue = document.getElementById('result')
    displayvalue.value = Math.pow(displayvalue.value,1/5)
}


function sin(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.sin(displayvalue.value*(Math.PI/180))
}

function sinh(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.sinh(displayvalue.value)
}

function asin(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.asin(displayvalue.value)
}

function asinh(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.asinh(displayvalue.value)
}


function cos(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.cos(displayvalue.value*(Math.PI/180))
}

function cosh(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.cosh(displayvalue.value)
}

function acos(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.acos(displayvalue.value)
}

function acosh(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.acosh(displayvalue.value)
}

function tan(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.tan(displayvalue.value*(Math.PI/180))
}

function tanh(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.tanh(displayvalue.value)
}

function atan(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.atan(displayvalue.value)
}

function atanh(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.atanh(displayvalue.value)
}

function cot(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.cot(displayvalue.value*(Math.PI/180))
}

function cotx(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.cotx(displayvalue.value)
}

function log(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.log10(displayvalue.value)
}

function ln(){
    const displayvalue = document.getElementById('result')
    displayvalue = Math.log(displayvalue.value)
}