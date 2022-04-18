function mine(arr) {
  const oneBitcoin = Number(11949.16);
  const oneGramGold = Number(67.51);
  let howManyGramsInOneBitcoin = oneBitcoin / oneGramGold;
  let dayCounter = 1;
  let sumOfGrams = 0;
  let dayOfFirstPurchase = ``;
  let BoughtBitcoin = 0;
  
  while (dayCounter <= arr.length) {

        if (dayCounter % 3 === 0 && dayCounter !== 0) {
            sumOfGrams += Number(arr[dayCounter-1]) - (30/100 * arr[dayCounter-1]);
        } else {
            sumOfGrams += Number(arr[dayCounter-1]);
        }

        if (sumOfGrams > howManyGramsInOneBitcoin) {
            while (sumOfGrams > howManyGramsInOneBitcoin) {
                BoughtBitcoin++; 
            if (BoughtBitcoin === 1) {
         dayOfFirstPurchase = dayCounter;
            }               
            sumOfGrams -= howManyGramsInOneBitcoin;
            }
        }
    
    dayCounter++;
  }

  console.log(`Bought bitcoins: ${Number(BoughtBitcoin)}`);
  if (BoughtBitcoin !== 0) {
      console.log(`Day of the first purchased bitcoin: ${Number(dayOfFirstPurchase)}`);      
  }
  console.log(`Left money: ${(sumOfGrams*oneGramGold).toFixed(2)} lv.`);
}

// mine([100, 200, 300]);
// mine([50, 100]);
// mine([60, 60, 60, 60, 60, 60, 60, 60, 60]);
// mine([300, 600, 700, 800, 900, 1000, 60, 60, 60]);
mine([3124.15, 504.212, 2511.124]);

// // const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);


// function mine(arr) {
//     const oneBitcoin = Number(11949.16);
//     const oneGramGold = Number(67.51);
//     let howManyGramsInOneBitcoin = oneBitcoin / oneGramGold;
  
//     console.log(`grams ${howManyGramsInOneBitcoin}`);
  
//     let dayCounter = 0;
//     let sumOfGrams = 0;

//     while (dayCounter !== arr.length) {
        
    // }
    //     }