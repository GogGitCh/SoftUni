function bestPlayer(input) {
    let index = 0;
    let bestPlayerScore = 0;
    let bestPlayerName = "";
    let isHeadTrick = false;
    let playerName = input[index];
        index++;

    while (playerName !== 'END') {
        
        let goalsScored = Number(input[index]);
        index++;

        if (goalsScored >= 3) {
            isHeadTrick = true;
        }


        if (goalsScored > bestPlayerScore) {
            bestPlayerScore = goalsScored;
            bestPlayerName = playerName;
        }

        if (goalsScored >= 10){
            break;
        }
        
        playerName = input[index];
        index++;

        
    }
    console.log(`${bestPlayerName} is the best player!`);

    if (isHeadTrick) {
        console.log(`He has scored ${bestPlayerScore} goals and made a hat-trick !!!`);
        return;
    } else {
        console.log(`He has scored ${bestPlayerScore} goals.`);
        return;
    }

}

bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])

bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"])

bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"])
