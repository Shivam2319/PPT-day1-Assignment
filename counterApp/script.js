let counterValue = 0;
function updateCounter() {
    document.getElementById("value").innerHTML = counterValue;
}
let incrementValue = ()=>{
    counterValue +=1;
    updateCounter();
}
let decrementValue = ()=>{
    counterValue -=1;
    updateCounter();
}
let resetValue = ()=>{
    counterValue =0;
    updateCounter();
}