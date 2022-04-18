//1st ex 
function multiplyByTwo(num) {
    return num * 2;
}

//2nd ex 
function studentInfo(name, age, grade) {
    return `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
}

//3rd ex
function excellentOrNot(grade) {
    return grade >= 5.50 ? 'Excellent' : 'Not excellent';
}

//4th ex 
function countryLanguage(country) {
    return 'England, USA'.includes(country) ? 'English' : 'Spain, Argentina, Mexico'.includes(country) ? 'Spanish' : "unknown";
}

//5th ex
function numToMonth(num) {
    return num <= 12 ? Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(num.toString())) : 'Error!';
}

//6th ex
function ageToPrice(typeDay, age) {
    let isOld = age > 64 && age <= 122;
    let isMidAge = age > 18 && age <= 64;
    let isKid = age >= 0 && age <= 18;
    let prices = { 'Weekday': ['12$', '18$', '12$'], 'Weekend': ['15$', '20$', '15$'], 'Holiday': ['5$', '12$', '10$'] };

    return isOld ? prices[typeDay][2] : isMidAge ? prices[typeDay][1] : isKid ? prices[typeDay][0] : 'Error!';
}

//7th ex
function prints1To5() {
    return Array.from({ length: 5 }, (i, n) => n + 1).join('\n')
}

//8th ex
function divisiblesByThree() {
    return Array.from({ length: 100 }, (i, n) => n + 1).filter(el => el % 3 == 0).join('\n');
}

//9th ex
function printsNto1(N) {
    return Array.from({ length: N }, (i, n) => n + 1).reverse().join('\n');
}

//10th ex
function printsMtoN(M, N) {
    return Array.from({ length: M - N + 1 }, (i, n) => n + N).reverse().join('\n');
}

//11th ex
function oddNumsAndSum(N) {
    return Array.from({ length: N * 2 }, (i, n) => n + 1).filter(el => el % 2 != 0).join('\n') + `\nSum: ${N * N}`;
}