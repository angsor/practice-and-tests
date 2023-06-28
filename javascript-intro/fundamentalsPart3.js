function add7(number) {
    return(number + 7);
}

function multiply(number1,number2) {
    return(number1 * number2);
}

function capitalize(string) {
    let firstCharacter = string.charAt(0);
    firstCharacter = firstCharacter.toUpperCase();
    let lastPartofString = string.slice(1);
    let capitalizeReturn = firstCharacter + lastPartofString;
    return capitalizeReturn;
}

function lastLetter(string) {
    return(string.slice(-1));
}

console.log(add7(3))
console.log(multiply(2,3))
console.log(capitalize('abcdefg'))
console.log(lastLetter("abcdefg"))