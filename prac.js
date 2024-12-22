function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        document.getElementById("result").innerText = "Result: " + result;
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers!";
    }
}
function subNumbers(){
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    if(!isNaN(num3)&&!isNaN(num4)){
        const result1=num3-num4;
        document.getElementById("result1").innerText="Result: " + result1;
    }
    else{
        document.getElementById("result1").innerText="Please enter a valid number";
    }
}
function multNumbers(){
    const num5 = parseFloat(document.getElementById("num5").value);
    const num6 = parseFloat(document.getElementById("num6").value);
    if(!isNaN(num5)&&!isNaN(num6)){
        const result2=num5*num6;
        document.getElementById("result2").innerText="Result: " + result2;
    } 
    else{
        document.getElementById("result2").innerText="please enter a valid number";
    }
    
}
function divNumbers(){
    const num7=parseFloat(document.getElementById("num7").value);
    const num8=parseFloat(document.getElementById("num8").value);
    if(!isNaN(num7)&&!isNaN(num8)){
        const result3=num7/num8;
        document.getElementById("result3").innerText="Result: " + result3;
    }
    else{
        document.getElementById("result3").innerText="please enter a valid number";
    }
}