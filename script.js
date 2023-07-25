const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

// setting focus to celsisu input when page loads
// window.addEventListener("load", () => celsius.focus());

// converting celsius to fahrenit---->
celsius.addEventListener("input", ()=>{
    fahrenheit.value = ((celsius.value * 9)/5 + 32).toFixed(2);
    if(!celsius.value) fahrenheit.value = "";
})
// converting Fahrenhie to celsisu----->
fahrenheit.addEventListener("input", ()=>{
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
})