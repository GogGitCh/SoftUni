function bonusPoints(input){
    
    let score = Number(input[0]) // превръщам входа на данните в число

    let bonus = 0.0 // създавам параметър bonus, който да използваме в условието If
    
    if (score <= 100){  // Ако числото е до 100 включително, бонус точките са 5.
        bonus=5}
    

    else if (score > 100 && score <= 1999){ //Ако числото е по-голямо от 100, бонус точките са 20% от числото.
        bonus = score*(20/100)}
        

    else {  
        bonus = score*(10/100)
    } // Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
    

    if (bonus % 2 == 0){
        bonus += 1;
    }
        
    else if (bonus % 10 == 5){
        bonus += 2;
    }

    console.log(bonus)
    console.log(score+bonus)
}

bonusPoints(["20"])

bonusPoints(["175"])

bonusPoints(["2703"])

bonusPoints(["15875"])
