const btn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")


//Using an event listener to trigger  a function when the button is clicked
//Specified the type of event we are listening for
//Then created the fuction that we want to execute once the event is inoked
btn.addEventListener("click", function() {
    console.log("Clicked from the event listener")
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = "" //Clears the input field once its done

    
})

function renderLeads(){

    let listItems = "<li>" + inputEl.value + "</li> "
    listEl.innerHTML += listItems

}