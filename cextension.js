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

    for(let i = 0; i < myLeads.length; i++){
        console.log(myLeads[i])
        listEl.innerHTML += "<li>" + myLeads[i] + "</li> "
    }
    
    
})

/*
for(let i = 0; i < myLeads.length; i++){
        console.log(myLeads[i])
        listEl.innerHTML += "<li>" + myLeads[i] + "</li> "
    }
        */

for(let i = 0; i < myLeads.length; i++){
    
    //Creates a html element 
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    listEl.append(li)
}