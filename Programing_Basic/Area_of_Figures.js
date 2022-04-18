function areaOfFigures(input) {
    let figure = (input[0])
    let a = (input[1])
    let b = (input[2])

    if (figure === "square") {
        console.log(a*a)
    }

    if (figure === "rectangle"){
        console.log(a*b)
    }

    if (figure === "circle"){
        console.log(Math.PI*a*a) // как да сложим .toFixed() тук ? 
    }
    if (figure === "triangle"){
        console.log(1/2*(a*b))
    }

    if (figure === "triangle"){
        console.log((a*b)/2)
    }
}

areaOfFigures(["square","5"])
areaOfFigures(["rectangle","7","2.5"])
areaOfFigures(["circle","6"])
areaOfFigures(["triangle","4.5","20"])