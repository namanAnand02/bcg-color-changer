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



// const body = document.body
// const buttons = document.querySelectorAll("button")
// // // all buttons will get accumulated in the nodeList

// // // we can run a forEach loop to iterate over all the individual button in the nodeList and add eventListener to all of them.

// buttons.forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         // console.log(button.id); // button.id gives us the id of the buttons-which we have set as their color name 


//         // we get to know which color btn got pressed using button.id and then change the bcg color of body to that button color 
//         body.style.backgroundColor = button.id
        
//     })
// })




//***************************************************** */
//***************************************************** */


// ****** optimisation - 3: event Bubbling concept used ******


// event bubbling says, if any of the child gets called, the calling/ trigger gets propagated towards outside until it reaches the root.
// basically, all of its parents, grandparents, and other older ancestors will get called too.

// we will use this concept to avoid using too many evenListener 
// inspite of adding eventListener to all the buttons, we will add one eventListener to their parent element only. 

// when any of the child(color-btns) will get clicked, 
// the trigger will also reach at the parent at some point, 
// and thus the eventListener attached to the parent will get activated.


// that parent can also findout about which child (color-btn) got clicked,
// using event---> event.target

// afterwards, the bcg color of body will be changed to the color of that child button 


const body = document.body

const parent = document.getElementById("parent")

parent.addEventListener("click", (event)=>{

    // console.log(event.target);
    // // <button id = "yellow"> yellow </button>

    // console.log(event.target.id); // yellow 

    // we found out which color - btn got pressed using event.target
    
    // since we have set the id's of every btn as their color name, we can also find out the color of the btn prssed using event.target.id 

    // we will set the bcg color of body to this color 

    
    body.style.backgroundColor = event.target.id
})


// this is best optimised as we get to use eventListener only once 

// try to avoid using lot of eventListeners 
