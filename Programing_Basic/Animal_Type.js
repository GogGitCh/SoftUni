function animals(input){
    let pet = (input[0])

    switch (pet) {
        case "dog":
            console.log("mammal")
            break;

        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile")
            break;
    
        default:
            console.log("unknown")
            break;
    }
}

animals(["dog"])
animals(["snake"])
animals(["cat"])