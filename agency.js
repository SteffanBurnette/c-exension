const imgs = [
    "giphy.gif",
    "giphy2.gif",
    "giphy3.gif"
]

const container = document.getElementById("container")

function renderAgents(agents){
    let vals = ""
    for(let i = 0; i < agents.length; i++){
        vals += `<img src = ${agents[i]} />`
    }
    container.innerHTML = vals
}


renderAgents(imgs)

