// on button click, the background of the page takes the color of that button 

// click button- listen to that click
// bcg of body- changed to that button color 

// const red = document.getElementById("red")
// const blue = document.getElementById("blue")
// const green = document.getElementById("green")
// const pink = document.getElementById("pink")
// const yellow = document.getElementById("yellow")
// const purple = document.getElementById("purple")


// const body = document.body

// red.addEventListener("click", ()=>{
//     body.style.backgroundColor = "red"

// })
// blue.addEventListener("click", ()=>{
//     body.style.backgroundColor = "blue"

// })
// green.addEventListener("click", ()=>{
//     body.style.backgroundColor = "green"

// })
// pink.addEventListener("click", ()=>{
//     body.style.backgroundColor = "pink"

// })
// yellow.addEventListener("click", ()=>{
//     body.style.backgroundColor = "yellow"

// })
// purple.addEventListener("click", ()=>{
//     body.style.backgroundColor = "purple"

// })



/// ***************************************************//

// ****** optimisation -1 || running loop to add eventListener to all the buttons ********

// case: suppose 100 diff color buttons are there, what do i do then? would i be adding eventListener to each of them individually? --> NO

// we'll find out a way to run a loop on all the buttons and add eventlistener on them 



const body = document.body
const buttons = document.querySelectorAll("button")
// all buttons will get accumulated in the nodeList

// we can run a forEach loop to iterate over all the individual button in the nodeList and add eventListener to all of them.

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        // console.log(button.id); // button.id gives us the id of the buttons-which we have set as their color name 


        // we get to know which color btn got pressed using button.id and then change the bcg color of body to that button color 
        body.style.backgroundColor = button.id
        
    })
})