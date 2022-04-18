function aquearium(input){
    let lenght = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let nonWater = Number(input[4])

    let emptyThankVolume = lenght*width*height
    let convertor = emptyThankVolume*0.001 /// това не ми ли дава конветираната сума на см^3 към дм^2, a не коллко литра е акавариума

    let percentOff = nonWater*0.01

console.log(convertor)
console.log(percentOff)
}

aquearium(["85","75","47","17"])

     
