function barcodeGenerator(input) {
    index = 0;
    let barcodeRangeFirst = Number(input[index]);
    index++;
    let barcodeRangeLast = Number(input[index]);

    let barcodeNeeded = ""


    for (let bri = barcodeRangeFirst; bri < barcodeRangeLast; bri++) {
        let isFlag = false;
        let briString = String(bri);

        for (let j = 0; j < 4; j++) {
            if (briString[j] % 2 === 0) {
                isFlag = true;

            }
        }

        if (!isFlag) {
            barcodeNeeded += briString + " ";
        }

    }
    console.log(barcodeNeeded);
}

// barcodeGenerator(["2345",
//     "6789"])
// barcodeGenerator(["3256",
// "6579"])

barcodeGenerator(["1365",
    "5877"])

