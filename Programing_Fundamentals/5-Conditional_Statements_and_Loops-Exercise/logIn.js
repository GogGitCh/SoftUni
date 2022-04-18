function logi(input) {
  let index = 0;
  let criptPass = input[index];
  let splitPass = criptPass.split("");
  let reversePass = splitPass.reverse();
  let joinActualPass = reversePass.join(``);
  index++;
  let counterWrongPass = 0;
  
  while (index < input.length) {
    
    let logAttempt = input[index];
    if (logAttempt === joinActualPass) {
      console.log(`User ${criptPass} logged in.`);
      break;
    } else if (logAttempt !== joinActualPass) {
      counterWrongPass++;
      if (counterWrongPass >= 4) {
        console.log(`User ${criptPass} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
      index++;
    }
  }
}

logi(["Acer", "login", "go", "let me in", "recA"]);
logi(['momo','omom']);
logi(['sunny','rainy','cloudy','sunny','not sunny']);
