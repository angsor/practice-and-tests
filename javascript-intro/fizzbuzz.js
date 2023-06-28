let number = parseInt(prompt("Please put the number that you want to FizzBuzz"));

for (i=1; i <= number; i++) {
    if (i == 69 || i == 420){
        alert (i + " heh");
    }
    else if (i % 5 == 0 && i % 3 ==0) {
        alert ("FizzBuzz for " + i);
    }
    else if (i % 3 == 0) {
        alert("Buzz for " + i);
    }
    
    else if (i % 5 == 0) {
        alert ("Fizz for " + i);
    };
}





