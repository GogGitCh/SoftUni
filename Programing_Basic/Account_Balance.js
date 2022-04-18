function balance(param) {
    let instalment = param[0]
    let index = 0
    let balance = 0 

    while (instalment !== "NoMoreMoney") {
        
        let allDeposit = Number(instalment);
        if (allDeposit < 0) {
            console.log("Invalid operation!")
        }
        index++
        balance += allDeposit
        console.log(`Increase: ${allDeposit.toFixed(2)}`)
        instalment = param[index]
        index++
        
    }
    console.log(`Total:${balance.toFixed(2)}`)
}

balance(["5.51","69.42","100","NoMoreMoney"])

// function balance(input) {
//     let account = Number(0)
//     let index = 0 
//     let counter = 0 

//     while (counter !== "NoMoreMoney") {
        
//         let installment = Number(input[index])
//         index++
//         if (installment === "NoMoreMoney") {
//             console.log(`Total: ${account}`)

//         } else if (installment < 0) {
//             console.log("Invalid operation!")

//         } else if (installment >= 0){
//             console.log(`Increase: ${installment}`)
//             account += installment
//     }
// }
// }
// balance(["5.51","69.42","100","NoMoreMoney"])

// function balance(input) {
//     let index = 0
//     let account = Number(0)
//     let installment = input[index]
    
//     while (installment !== "NoMoreMoney") {
//         let installmentCounter = Number(installment)
//         index++       

//             //console.log(`Increase: ${installmentCounter}`)   
//             //account += installmentCounter
        

//             //console.log("Invalid operation!")
    
//     //console.log(`Total: ${account}`)
// }
// }
// balance(["5.51","69.42","100","-150","NoMoreMoney"])