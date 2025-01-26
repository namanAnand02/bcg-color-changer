// on button click, the background of the page takes the color of that button 

// click button- listen to that click
// bcg of body- changed to that button color 

const red = document.getElementById("red")
const blue = document.getElementById("blue")
const green = document.getElementById("green")
const pink = document.getElementById("pink")
const yellow = document.getElementById("yellow")


const body = document.body

red.addEventListener("click", ()=>{
    body.style.backgroundColor = "red"

})
blue.addEventListener("click", ()=>{
    body.style.backgroundColor = "blue"

})
green.addEventListener("click", ()=>{
    body.style.backgroundColor = "green"

})
pink.addEventListener("click", ()=>{
    body.style.backgroundColor = "pink"

})
yellow.addEventListener("click", ()=>{
    body.style.backgroundColor = "yellow"

})