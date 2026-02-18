const btn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const delBtn = document.getElementById("delete-btn")

/**
 localStorage.setItem(key, value) -> Both key and value needs to be strings
 localStorage.getItem(key)
 localStorage.clear()
 */
// localStorage.setItem("myLeads", "www.exampleLead.com")
/*
myLeads = JSON.parse(myLeads)
myLeads.push("www.lead2.com")
myLeads = JSON.stringify(myLeads)
*/

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//Using an event listener to trigger  a function when the button is clicked
//Specified the type of event we are listening for.
//Then created the fuction that we want to execute once the event is inoked
btn.addEventListener("click", function() {
    console.log("Clicked from the event listener")
  
    myLeads.push(inputEl.value)
    //Saving the array to local storage after it has been pushed
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    inputEl.value = "" //Clears the input field once its done
    

    
})

//Clears the local storage, myLeads array and calls the renderLeads method
//Will trigger when the user performs a double click
delBtn.addEventListener("dblclick", function(){
    console.log("Delete button clicked")
    myLeads = []
    localStorage.clear()
    renderLeads()
})

function renderLeads(){

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += `
           <li>
               <a target = "_blank" href = "${myLeads[i]}">
               ${myLeads[i]}
               </a>
           </li>
        `
    }
        

    listEl.innerHTML = listItems

}

/*
function renderLeads(){

    //let listItems = "<li><a href = '" + inputEl.value + "' target = '_blank'>" + inputEl.value + "</a></li> "
        let listItems = `
        <li>
            <a href = '${inputEl.value}' target = '_blank'> 
                 ${inputEl.value}
            </a>
        </li> 
        `

    listEl.innerHTML += listItems

}
    */