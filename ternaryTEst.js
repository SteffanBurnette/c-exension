const time = 40

const message = time < 30 ? "You need to try harder" : time < 60 ? "doing good" : "excelent"


switch(item){
    case "coffee":
        price= 2
        break

    case "sandwiches":
        price = 5
        break

    case "salad":
        price = 4
        break

    case "lemon cake":
        price = 3
        break
    
    default:
        return `Sorry, we don't sell ${item}`
}

const msg = `You selected ${item}. That will be $${price}`
console.log(msg)