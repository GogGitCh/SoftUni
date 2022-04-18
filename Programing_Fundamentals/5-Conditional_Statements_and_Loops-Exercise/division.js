// function division(num) {
//     if (num % 2 === 0) {
//         if (num % 3 === 0) {
//             console.log(`The number is divisible by 6`);
//         } else if (num % 6 === 0) {
//             console.log(`The number is divisible by 6`);
//         }
//     } else if (n)
    
// }

function division(num) {
    let cheker = 0;
    if (num % 2 === 0) {
        cheker = 2;
    }
    if (num % 3 === 0) {
        if (cheker < 3) {
            cheker = 3;
        }
    }
    if (num % 6 === 0) {
        if (cheker < 6) {
            cheker = 6;
        }
    }
    if (num % 7 === 0) {
        if (cheker < 7) {
            cheker = 7;
        }
    }
    if (num % 10 === 0) {
        if (cheker < 10) {
            cheker = 10;
        }
    }
    if (cheker === 0) {
        console.log(`Not divisible`);
    } else {
     console.log(`The number is divisible by ${cheker}`);
    }
}


division(30)
division(15)
division(12)
division(1643)