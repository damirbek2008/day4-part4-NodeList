// NodeList = Static collection of HTM elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filterm reduce)
//            NodeList won't update tp automatically reflect changes





let buttons = document.querySelectorAll(".myButtons")


// ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor="green"
//     button.textContent+="😎"
// })


// CLICK event listener

buttons.forEach(Element=>{
    Element.addEventListener("click",event=>{
        event.target.style.backgroundColor="tomato"
    })
})




// MOUSEOVER + MOUSEOUT     event listeners

buttons.forEach(element =>{
    element.addEventListener("mouseover", event=>{
        event.target.style.backgroundColor='blue'
    })
})

buttons.forEach(element1 =>{
    element1.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor="  hsla(235, 86%, 20%, 0.671)"
    })
})







// ADD AN ELEMENT


// const newButton = document.createElement("button"); // Step 1
// newButton.textContent="Button 5" // STEP 2
// newButton.classList="myButtons"
// document.body.appendChild(newButton)//STEP 3

// buttons=document.querySelectorAll(".myButtons")

// console.log(buttons);








// REMOVE

buttons.forEach(element =>{
    element.addEventListener("click", event=>{
        event.target.remove();
        buttons=document.querySelectorAll(".myButtons")
        console.log(buttons);
    })
})