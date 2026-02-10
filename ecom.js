const container  = document.getElementById("container")

container.innerHTML = '<button id = "container-button" onclick = "buy()">Buy!</button>'

function buy(){
    container.innerHTML += "<p> Thank you for buying</p>"
    console.log("Thank you for buying")
}

