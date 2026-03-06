function checkUsername(user){
    if(user){
        console.log(user)
    }
    else {
        throw new Error("The username is not defined")
    }

}

checkUsername()
